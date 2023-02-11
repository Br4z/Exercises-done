import random

def play():
    user = input("What's your choice? 'r' for rock, 'p' for paper, 's' for scissors\n")
    computer = random.choice(['r', 'p', 's'])

    def is_win(player, opponent):
        # r > s - s > p - p > r
        return (player == 'r' and opponent == 's') or (player == 's' and opponent == 'p') or (player == 'p' and opponent == 'r')

    if user == computer:
        return 'It\'s a tie'

    if is_win(user, computer):
        return 'You won!'
    else: return 'You lost!'

print(play())