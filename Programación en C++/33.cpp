/** Video 87
 * This program swaps the values of two float variables using pointers.
 */
#include <iostream>
using namespace std;


void exchange(float*, float*);


int main() {
	float a = 5.2, b = 6.2;

	cout << "a: " << a << endl;
	cout << "b: " << b << endl;

	exchange(&a, &b);

	cout << "a: " << a << endl;
	cout << "b: " << b << endl;

	return 0;
}


void exchange(float* a, float* b) {
	float aux = *a;
	*a = *b;
	*b = aux;
}
