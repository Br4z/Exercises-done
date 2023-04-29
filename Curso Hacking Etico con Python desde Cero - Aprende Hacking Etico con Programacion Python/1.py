import optparse

# ----------------------------- optparse example ----------------------------- #

def fibonacci(n):
    if n == 0: return 0
    elif n <= 2: return 1
    else: return fibonacci(n - 1)  + fibonacci(n - 2)

def get_input():
    parser = optparse.OptionParser()

    parser.add_option("-n", "--number", type = "int", dest = "number", help = "Show \"n\" numbers of the Fibonacci succession")
    parser.add_option("-p", "--position", type = "int", dest = "position", help = "Show the \"n\" number associated with the \"p\" position of the Fibonacci succession")

    (options, arguments) = parser.parse_args()

    user_number = options.number
    user_position = options.position

    if not user_number and not user_position:
        parser.error("You haven't introduced any option")
    else:
        try:
            if not ((user_number and user_number >= 0) or (user_position and user_position >= 0)):
                raise ValueError("Negative number provided")

            return (user_number, user_position)
        except ValueError as e:
            print(e)
            exit()



def print_fibonacci(user_number, user_position):
    if (user_number and not user_position):
        for number in range(user_number + 1):
            print(fibonacci(number))
    else: print(fibonacci(user_position))

# Test---
# user_input = get_input()
# print_fibonacci(user_input[0], user_input[1])

# ----------------------- subprocess and regex example ---------------------- #

import subprocess, re

output = str(subprocess.check_output(["cal"]))

searched = re.search(r"[^\s\d]+ 2023", output)

# Test---
# print(searched)