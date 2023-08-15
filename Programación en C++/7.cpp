/** Video 27
 * This program calculates the sum of a series of numbers based on the value of "n".
 * 1 - 2 + 3 - 4 + 5 - 6 + 7 - 8 + 9 - 10 + ... + n
 */
#include <iostream>
using namespace std;


int main() {
	int number;

	cout << "Write the value of \"n\": "; cin >> number;

	if (number % 2 == 0) cout << -1 * (number / 2) << endl;
	else cout << -1 * (number / 2) + number << endl;

	return 0;
}
