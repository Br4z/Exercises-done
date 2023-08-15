/** Video 38
 * This program creates a square matrix of a given length and prints it in a transposed form.
 */
#include <iostream>
using namespace std;


int main() {
	int matrix[1000][1000], size;

	cout << "Write the length of the square matrix: "; cin >> size;

	for (int i = 0; i < size; i++) {
		for (int j = 0; j < size; j++) {
			matrix[i][j] = i * size + j + 1;
		}
	}

	for (int i = 0; i < size; i++) {
		for (int j = 0; j < size; j++) {
			cout << matrix[j][i] << " ";
		}
		cout << endl;
	}

	return 0;
}
