/** Video 51
 * This program sorts an array of numbers in ascending order using the insertion sort algorithm.
 */
#include <iostream>
using namespace std;


int main() {
	int numbers[] = { 5, 4, 3, 2, 1 }, numbersLength = sizeof(numbers) / sizeof(numbers[0]);

	for (int i = 0; i < numbersLength; i++) {
		int aux = numbers[i];
		while (numbers[i - 1] > aux && i > 0) {
			numbers[i] = numbers[i - 1];
			i--;
		}
		numbers[i] = aux;
	}

	for (int i = 0; i < numbersLength ; i++) {
		cout << numbers[i] << " ";
	}
	cout << endl;

	return 0;
}
