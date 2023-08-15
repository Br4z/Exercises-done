/** Video 10
 * This program calculates the solutions of a quadratic equation.
 */
#include <iostream>
#include <math.h>
using namespace std;


int main() {
	float a, b, c;

	cout << "Write the value of \"a\": "; cin >> a;
	cout << "Write the value of \"b\": "; cin >> b;
	cout << "Write the value of \"c\": "; cin >> c;

	float firstPart = -1 * b / 2 * a;
	float secondPart = sqrt(pow(b, 2) - 4 * a * c);


	cout << endl; cout << "The first solution of the equation is " << firstPart + secondPart << endl;
	cout << "The second solution of the equation is " << firstPart - secondPart << endl;

	return 0;
}
