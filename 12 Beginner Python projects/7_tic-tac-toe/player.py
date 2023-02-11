import random, math

class Player():
    def __init__(self, letter):
        self.letter = letter

    def get_move(self, game):
        pass

class HumanPlayer(Player):
    def __init__(self, letter):
        super().__init__(letter)

    def get_move(self, game):
        valid_square = False
        square = None

        while not valid_square:
            try:
                square = int(input(self.letter + '\'s turn. Input move (0 - 8): '))
                if square  not in game.available_moves():
                    raise ValueError
                valid_square = True
            except ValueError:
                print('Invalid square. Try again.')
        return square

class RandomComputerPlayer(Player):
    def __init__(self, letter):
        super().__init__(letter)

    def get_move(self, game):
        square = random.choice(game.available_moves())
        return square


class SmartComputerPlayer(Player):
    def __init__(self, letter):
        super().__init__(letter)

    def get_move(self, game):
        if len(game.available_moves()) == 9:
            square = random.choice(game.available_moves())
        else:
            square = self.minimax(game, self.letter)["position"]
        return square

    def minimax(self, state, player):
        max_player = self.letter
        other_player = 'O' if player == 'X' else 'X'

        if state.current_winner == other_player:
            return {"position": None, "score": 1 * (state.num_empty_squares() + 1) if other_player == max_player else -1 * (
                        state.num_empty_squares() + 1)}
        elif not state.empty_squares(): # Tie
            return {"position": None, "score": 0}

        # Initialization
        if player == max_player:
            best = {"position": None, "score": -math.inf}
        else:
            best = {"position": None, "score": math.inf}

        for possible_move in state.available_moves():
            state.make_move(possible_move, player)
            simulated_score = self.minimax(state, other_player)

            # Undo move
            state.board[possible_move] = " "
            state.current_winner = None
            simulated_score["position"] = possible_move # Score associated with that move

            if player == max_player:
                if simulated_score["score"] > best["score"]:
                    best = simulated_score
            else:
                if simulated_score["score"] < best["score"]:
                    best = simulated_score
        return best