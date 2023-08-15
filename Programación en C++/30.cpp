/** Video 84
 * This program prints the memory addresses and values of elements in an array.
 */
#include <iostream>
using namespace std;


int main() {
	int vector[5] = { 1, 2, 3, 4, 5 }, size = 5;
	int* pNumber;

	pNumber = &vector[0]; // pNumber = vector;

	for (int i = 0; i < size; i++) {
		cout << pNumber << endl;
		cout << *pNumber++ << endl; // Each position is equal to the previous one plus 4 bytes
	}

	return 0;
}
