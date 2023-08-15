/** Video 36
 * This program prompts the user to input elements for a 3x3 matrix and then prints the diagonal
 * elements.
 */
#include <iostream>
using namespace std;


int main() {
	int matrix[3][3], rows = 3, columns = 3;

	for (int i = 0; i < rows; i++) {
		for (int j = 0; j < columns; j++) {
			cout << "[" << i + 1 << "][" << j + 1 << "]: "; cin >> matrix[i][j];
		}
	}

	for (int i = 0; i < rows; i++) {
		cout << matrix[i][i] << " ";
	}
	cout << endl;

	return 0;
}
