/** Video 75
 * This program that prints a matrix, squares each element in the matrix, and then
 * prints the updated matrix.
 */
#include <iostream>
using namespace std;


void printMatrix(int matrix[][3], int, int);
void squareMatrix(int matrix[][3], int, int);


int main() {
	const int ROWS = 3, COLUMNS = 3;
	int matrix[ROWS][COLUMNS] = {
		1, 2, 3,
		4, 5, 6,
		7, 8, 9
	};

	printMatrix(matrix, ROWS, COLUMNS);
	squareMatrix(matrix, ROWS, COLUMNS);
	printMatrix(matrix, ROWS, COLUMNS);

	return 0;
}


void printMatrix(int matrix[][3], int rows, int columns) {
	for (int i = 0; i < rows; i++) {
		for (int j = 0; j < columns; j++)
			cout << matrix[i][j] << " ";
		cout << endl;
	}
	cout << endl;
}

void squareMatrix(int matrix[][3], int rows, int columns) {
	for (int i = 0; i < rows; i++)
		for (int j = 0; j < columns; j++)
			matrix[i][j] *= matrix[i][j];
}
