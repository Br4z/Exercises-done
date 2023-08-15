/** Video 52
 * This program sorts an array of numbers in ascending order using the selection sort algorithm.
 */
#include <iostream>
using namespace std;


int main() {
	int numbers[] = { 5, 4, 3, 2, 1 }, numbersLength = sizeof(numbers) / sizeof(numbers[0]);

	for (int i = 0; i < numbersLength; i++) {
		int minPosition = i, aux = numbers[i];

		for (int j = i + 1; j < numbersLength; j++) {
			if (numbers[j] < numbers[minPosition]) {
				minPosition = j;
			}
		}

		numbers[i] = numbers[minPosition];
		numbers[minPosition] = aux;
	}

	for (int i = 0; i < numbersLength ; i++) {
		cout << numbers[i] << " ";
	}
	cout << endl;

	return 0;
}
