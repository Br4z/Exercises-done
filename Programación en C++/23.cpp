/** Video 68
 * This program takes two integers as input, passes them by reference to a function, modifies their values
 * inside the function, and then prints the modified values.
 */
#include <iostream>
using namespace std;


void referenceTesting(int &, int &);


int main() {
	int a, b;

	cin >> a >> b;

	cout << "The first number is " << a << " and the second number is " << b << endl;
	referenceTesting(a, b);
	cout << "The first number is " << a << " and the second number is " << b << endl;

	return 0;
}


void referenceTesting(int &a, int &b) {
	a = 10;
	b = 20;
}
