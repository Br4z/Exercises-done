/** Video 6
 * This program takes two input values, calculates the result of a mathematical operation, and
 * displays the result with two decimal places.
 */
#include <iostream>
using namespace std;


int main() {
	float a, b, result;

	cout << "Write the value of \"a\": "; cin >> a;
	cout << "Write the value of \"b\": "; cin >> b;

	cout.precision(2); // Show two digits after the decimal point of float numbers
	result = (a + b) / (a - b);

	cout << endl; cout << "The result of the operation is " << result << endl;

	return 0;
}
