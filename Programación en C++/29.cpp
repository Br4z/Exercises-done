/** Video 83
 * This program checks if a given number is prime or not, using a pointer.
 */
#include <iostream>
using namespace std;


bool isPrime(int*);


int main() {
	int number;
	int* pNumber;

	pNumber = &number;

	cout << "Enter a number: "; cin >> number;

	if (isPrime(pNumber)) cout << "The number is prime" << endl;
	else cout << "The number is NOT prime" << endl;

	return 0;
}


bool isPrime(int* number) {
	if (*number == 1) return false;
	if (*number == 2) return true;

	for (int i = 2; i < *number / 2; i++) {
		if (*number % i == 0) return false;
	}

	return false;
}
