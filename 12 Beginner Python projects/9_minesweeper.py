import random, re

class Board:
    def __init__(self, dim_size, num_bombs):
        self.dim_size = dim_size
        self.num_bombs = num_bombs


        self.board = self.make_new_board() # Plant the bombs
        self.assign_values_to_board()

        # Initialize a set to keep track of which locations we've uncovered
        self.dug = set() # if we dig at 0, 0, then self.dug = {(0, 0)}


    def make_new_board(self):
        board = [[None for _ in range(self.dim_size)] for _ in range(self.dim_size)] # Matrix (dim_size x dim_size)

        bombs_planted = 0
        while bombs_planted < self.num_bombs:
            loc = random.randint(0, self.dim_size**2 - 1)
            row = loc // self.dim_size
            col = loc % self.dim_size
            # We could use diferrents randoms number, for each dimension

            if board[row][col] == "*": # This means we've actually planted a bomb there already so keep going
                continue

            board[row][col] = "*" # Plant the bomb
            bombs_planted += 1

        return board


    def assign_values_to_board(self):
        # We can precompute these and it'll save us some effort checking what's around the board later on
        for row in range(self.dim_size):
            for column in range(self.dim_size):
                if self.board[row][column] == "*":
                    continue
                self.board[row][column] = self.get_num_neighboring_bombs(row, column)

    def get_num_neighboring_bombs(self, row, col):
        # let"s iterate through each of the neighboring positions and sum number of bombs
        """
            (row - 1, col - 1) (row - 1, col) (row - 1, col + 1)
            (row, col - 1)            X       (row, col + 1)
            (row + 1, col - 1) (row + 1, col) (row + 1, col + 1)
        """

        num_neighboring_bombs = 0
        for r in range(max(0, row - 1), min(self.dim_size - 1, row + 1) + 1): # For locations in the horizontal bounds
            for c in range(max(0, col - 1), min(self.dim_size - 1, col + 1) + 1): # For locations in the vertical bounds
                if r == row and c == col:
                    # our original location, don"t check
                    continue
                if self.board[r][c] == "*":
                    num_neighboring_bombs += 1
        return num_neighboring_bombs


    def dig(self, row, col):
        '''
            Dig at that location!
            Return True if successful dig, False if bomb dug

            Scenarios:
            - hit a bomb -> game over
            - dig at location with neighboring bombs -> finish dig
            - dig at location with no neighboring bombs -> recursively dig neighbors!        
        '''

        self.dug.add((row, col))

        if self.board[row][col] == "*":
            return False
        elif self.board[row][col] > 0:
            return True

        # self.board[row][col] == 0 means no bombs around that location
        for r in range(max(0, row - 1), min(self.dim_size - 1, row + 1) + 1):
            for c in range(max(0, col - 1), min(self.dim_size - 1, col + 1) + 1):
                if (r, c) in self.dug:
                    continue
                self.dig(r, c)

        # If our initial dig didn't hit a bomb, we *shouldn't* hit a bomb here
        return True

    def __str__(self):
        # First let's create a new array that represents what the user would see
        visible_board = [[None for _ in range(self.dim_size)] for _ in range(self.dim_size)]
        for row in range(self.dim_size):
            for col in range(self.dim_size):
                if (row, col) in self.dug:
                    visible_board[row][col] = str(self.board[row][col])
                else:
                    visible_board[row][col] = " "

        # put this together in a string
        string_rep = ""
        # get max column widths for printing
        widths = []
        for idx in range(self.dim_size):
            columns = map(lambda x: x[idx], visible_board)
            widths.append(
                len(max(columns, key = len))
            )

        # print the csv strings
        indices = [i for i in range(self.dim_size)]
        indices_row = "   "
        cells = []
        for idx, col in enumerate(indices):
            format = "%-" + str(widths[idx]) + "s"
            cells.append(format % (col))
        indices_row += "  ".join(cells)
        indices_row += "  \n"

        for i in range(len(visible_board)):
            row = visible_board[i]
            string_rep += f"{i} |"
            cells = []
            for idx, col in enumerate(row):
                format = "%-" + str(widths[idx]) + "s"
                cells.append(format % (col))
            string_rep += " |".join(cells)
            string_rep += " |\n"

        str_len = int(len(string_rep) / self.dim_size)
        string_rep = indices_row + "-"* str_len + "\n" + string_rep + "-"* str_len

        return string_rep

def play(dim_size = 10, num_bombs = 10):
    # Step 1: create the board and plant the bombs
    board = Board(dim_size, num_bombs)
    safe = True

    # Step 4: repeat steps 2 and 3a/b until there are no more places to dig -> VICTORY!
    while len(board.dug) < board.dim_size ** 2 - num_bombs:
        print(board)
        # Step 2: show the user the board and ask for where they want to dig
        # 0,0 or 0, 0 or 0,    0
        user_input = re.split(",(\\s)*", input("Where would you like to dig? Input as row,col: "))  # "0, 3"
        row, col = int(user_input[0]), int(user_input[-1])
        if 0 > row or row >= board.dim_size or 0 > 0 or col >= dim_size:
            print("Invalid location. Try again.")
            continue

        # Step 3b: if location is not a bomb, dig recursively until each square is at least next to a bomb
        safe = board.dig(row, col)
        if not safe:
            break


    if safe:
        print("CONGRATULATIONS!!!! YOU ARE VICTORIOUS!")
    else:
        # Step 3a: if location is a bomb, show game over message
        print("SORRY GAME OVER :(")
        board.dug = [((r, c) for r in range(board.dim_size)) for c in range(board.dim_size)] # Revealing the whole board
        print(board)

if __name__ == "__main__":
    play()