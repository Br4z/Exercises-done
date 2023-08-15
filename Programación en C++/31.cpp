/** Video 85
 * This program finds the minimum and prints its position value in an array, using pointers.
 */
#include <iostream>
using namespace std;


int main() {
	int vector[5] = { 1, 2, 3, 4, 5 }, size = 5;
	int* pNumber; int* pMin;

	pNumber = &vector[1];
	pMin = &vector[0];

	for (int i = 1; i < size; i++) {
		if (*pMin > *pNumber) pMin = pNumber;
		pNumber++;
	}

	cout << "The min value is " << *pMin << endl;
	cout << "The position (in memory) of the min value is " << pMin << endl;

	return 0;
}
