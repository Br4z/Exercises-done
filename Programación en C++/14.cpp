/** Video 50
 * This program sorts an array of numbers in ascending order using the bubble sort algorithm.
 */
#include <iostream>
using namespace std;


int main() {
	int numbers[] = { 5, 4, 3, 2, 1 }, numbersLength = sizeof(numbers) / sizeof(numbers[0]);

	for (int i = 0; i < numbersLength ; i++) {
		for (int j = 0; j < numbersLength - 1 ; j++) {
			if (numbers[j] > numbers[j + 1]) {
				int aux = numbers[j];
				numbers[j] = numbers[j + 1];
				numbers[j + 1] = aux;
			}
		}
	}

	for (int i = 0; i < numbersLength ; i++) {
		cout << numbers[i] << " ";
	}
	cout << endl;

	return 0;
}
