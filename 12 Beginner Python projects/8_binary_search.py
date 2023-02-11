import time, random
"""
    Naive search: scan entire list and ask if it's equal to the target
    - If yes, return the index
    - If no, then return -1
"""

def naive_search(list, target):
    for i in range(len(list)):
        if list[i] == target:
            return i
    return -1

def binary_search(list, target, low = None, hight = None):
    if low is None:
        low = 0

    if hight is None:
        hight = len(list) - 1

    if hight < low:
        return -1

    midpoint = (low + hight) // 2
    element = list[midpoint]

    if element == target:
        return midpoint
    elif target < element:
        return binary_search(list, target, low, midpoint - 1)
    else:
        return binary_search(list, target, midpoint + 1, hight)

if __name__=='__main__':
    length = 10000
    # build a sorted list of length 10000
    sorted_list = set()
    while len(sorted_list) < length:
        sorted_list.add(random.randint(-3*length, 3*length))
    sorted_list = sorted(list(sorted_list))

    start = time.time()
    for target in sorted_list:
        naive_search(sorted_list, target)
    end = time.time()
    print("Naive search time: ", (end - start), "seconds")

    start = time.time()
    for target in sorted_list:
        binary_search(sorted_list, target)
    end = time.time()
    print("Binary search time: ", (end - start), "seconds")