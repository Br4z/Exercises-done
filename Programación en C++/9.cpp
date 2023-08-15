/** Video 33
 * This program prompts the user to enter the number of elements they want to insert into a vector,
 * then asks for the values of each element and checks if there is an element in the vector that is
 * equal to the sum of the rest of the elements.
 */
#include <iostream>
using namespace std;


int main() {
	int vector[1000], elementsNumber, max, sum = 0;

	cout << "Write the number of elements you want to insert in the vector: "; cin >> elementsNumber;

	for (int i = 0; i < elementsNumber; i++) {
		cout << "Write the " << i + 1 << " vector element: "; cin >> vector[i];

		sum += vector[i];

		if (vector[i] > max) max = vector[i];
	}

	if (sum == max) cout << "There is an element in the vector that is equal to the sum of the rest of the elements" << endl;
	else cout << "There is NOT an element in the vector that is equal to the sum of the rest of the elements" << endl;

	return 0;
}
