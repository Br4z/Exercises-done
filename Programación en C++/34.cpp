/** Video 89
 * This program allows the user to enter a set of numbers and then search for a specific number within
 * that set.
 */
#include <iostream>
using namespace std;


void askData(int* &, int);
bool search(int*, int, int, int &);


int main() {
	int* numbers; int numberOfNumbers, numberToSearch, position;

	cout << "Enter the number of numbers: "; cin >> numberOfNumbers;
	askData(numbers, numberOfNumbers);
	cout << "Enter the number to search: "; cin >> numberToSearch;

	if (search(numbers, numberOfNumbers, numberToSearch, position)) {
		cout << "The number " << numberToSearch << " was found at position " << position + 1 << endl;
	}
	else {
		cout << "The number " << numberToSearch << " was NOT found" << endl;
	}

	delete[] numbers;

	return 0;
}


void askData(int* &numbers, int numberOfNumbers) {
	numbers = new int[numberOfNumbers];

	for (int i = 0; i < numberOfNumbers; i++) {
		cout << "Enter the number " << i + 1 << ": "; cin >> numbers[i];
	}
}

bool search(int* numbers, int numberOfNumbers, int number, int &position) {
	for (int i = 0; i < numberOfNumbers; i++) {
		if (numbers[i] == number) {
			position = i;
			return true;
		}
	}
	return false;
}
