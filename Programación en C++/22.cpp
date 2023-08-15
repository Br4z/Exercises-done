/** Video 67
 * This program defines a template function called "max" that takes three values as input and returns
 * the maximum value among them.
 */
#include <iostream>
using namespace std;


template <class value>
value max(value, value, value );


int main() {
	char x = 'a', y = 'b', z = 'c';

	cout << "The max value is " << max(x, y, z) << endl;

	return 0;
}


template <class value>
value max(value x, value y, value z) {
	value max = x;

	if (y > max) {
		max = y;
	}

	if (z > max) {
		max = z;
	}

	return max;
}
