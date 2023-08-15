/** Video 26
 * This program calculates the sum of factorials up to a given number.
 */
#include <iostream>
using namespace std;


int main() {
	int number, factorial = 1, sum = 1;

	cout << "Write the value of \"n\": "; cin >> number;

	for (int i = 2; i <= number; i++) {
		factorial *= i;
		sum += factorial;
	}
	cout << sum << endl;

	return 0;
}
