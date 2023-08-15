/** Video 24
 * This program calculates the result of raising a number x to the power of y.
 */
#include <iostream>
using namespace std;


int main() {
	int x, y; float result = 1;

	cout << "Write the value of \"x\": "; cin >> x;
	cout << "Write the value of \"y\": "; cin >> y;

	if (y < 0) {
		for (int i = 0; i < -1 * y; i++) {
			result /= x;
		}
	} else {
		for (int i = 0; i < y; i++) {
			result *= x;
		}
	}
	cout << result << endl;

	return 0;
}
