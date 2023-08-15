/** Video 73
 * This program checks if a given vector is ordered in ascending order.
 */
#include <iostream>
using namespace std;


void checkOrder(int vector[], int);


int main() {
	int vector[5] = { 1, 2, 3, 4, 5 }, size = 5;

	checkOrder(vector, size);

	return 0;
}


void checkOrder(int vector[], int size) {
	bool ordered = true;

	for (int i = 1; i < size; i++) {
		if (vector [i - 1] > vector[i]) { // vector [i - 1] < vector[i] for descending order
			ordered = false;
			break;
		}
	}

	if (ordered) cout << "The vector is ordered" << endl;
	else cout << "The vector is NOT ordered" << endl;
}
