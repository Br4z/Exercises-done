/** Video 54
 * This program uses binary search to find the position of a given element in an array.
 */
#include <iostream>
using namespace std;


int main() {
	int numbers[] = { 1, 2, 3, 4, 5 }, numbersLength = sizeof(numbers) / sizeof(numbers[0]), element = 2, left, right;

	left = 0;
	right = numbersLength - 1;

	while (left <= right) {
		int middle = (left + right) / 2;

		if (element == numbers[middle]) {
			cout << "Element found at position " << middle << endl;
			break;
		} else if (element < numbers[middle]) { // element > numbers[middle] for descending order
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}

	return 0;
}
