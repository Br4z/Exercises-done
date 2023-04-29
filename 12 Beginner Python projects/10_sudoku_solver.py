from pprint import pprint


def find_next_empty(puzzle):
    for r in range(9):
        for c in range(9):
            if puzzle[r][c] == -1:
                return r, c

    return None, None  # If no spaces in the puzzle are empty

def is_valid(puzzle, guess, row, col):
    # Row check
    if guess in puzzle[row]:
        return False

    # Column check
    if guess in [puzzle[i][col] for i in range (9)]:
        return False

    # Chunck check
    row_start = (row // 3) * 3
    column_start = (col // 3) * 3

    for r in range(row_start, row_start + 3):
        for c in range(column_start, column_start + 3):
            if puzzle[r][c] == guess:
                return False

    return True

def solve_sudoku(puzzle):
    # Step 1: choose somewhere on the puzzle to make a guess
    row, col = find_next_empty(puzzle)

    # Step 1.1: if there's nowhere left, then we're done because we only allowed valid inputs
    if row is None: # col is None also
        return True

    # Step 2: if there is a place to put a number, then make a guess between 1 and 9
    for guess in range(1, 10):
        # Step 3: check if this is a valid guess
        if is_valid(puzzle, guess, row, col):
            # Step 3.1: if this is a valid guess, then place it at that spot on the puzzle
            puzzle[row][col] = guess
            # Step 4: then we recursively call our solver!
            if solve_sudoku(puzzle):
                return True

        # Step 5: it not valid or if nothing gets returned true, then we need to backtrack and try a new number
        puzzle[row][col] = -1

    # Step 6: if none of the numbers that we try work, then this puzzle is UNSOLVABLE!!
    return False

# ------------------------------------- - ------------------------------------ #

if __name__ == '__main__':
    example_board = [
        [3 , 9 , -1,   -1,  5, -1,   -1, -1, -1],
        [-1, -1, -1,    2, -1, -1,   -1, -1,  5],
        [-1, -1, -1,    7,  1,  9,   -1,  8, -1],

        [-1,  5, -1,   -1,  6,  8,   -1, -1, -1],
        [ 2, -1,  6,   -1, -1,  3,   -1, -1, -1],
        [-1, -1, -1,   -1, -1, -1,   -1, -1,  4],

        [5, -1, -1,   -1, -1, -1,   -1, -1, -1],
        [6,  7, -1,    1, -1,  5,   -1,  4, -1],
        [1, -1,  9,   -1, -1, -1,    2, -1, -1]
    ]
    print(solve_sudoku(example_board))
    pprint(example_board)