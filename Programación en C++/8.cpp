/** Video 29
 * This program takes a number as input and decomposes it into its prime factors.
 */
#include <iostream>
using namespace std;


int main() {
	int number;

	cout << "Write the number you want to decompose: "; cin >> number;

	cout << number << " = ";
	for (int i = 2; i <= number; i++) {
		while (number % i == 0) {
			if (number == i) cout << i;
			else cout << i << " * ";
			number /= i;
		}
	}
	cout << endl;

	return 0;
}
