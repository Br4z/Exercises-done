/** Video 76
 * This program prints a matrix, asks the user for a row number, and then returns the smallest element
 * in that row.
 */
#include <iostream>
using namespace std;


void printMatrix(int matrix[][3], int, int);
int getMinorElementRow(int matrix[][3], int, int, int);


int main() {
	int row;
	const int ROWS = 3, COLUMNS = 3;
	int matrix[ROWS][COLUMNS] = {
		1, 2, 3,
		4, 5, 6,
		7, 8, 9
	};

	printMatrix(matrix, ROWS, COLUMNS);
	cout << "Enter the row: "; cin >> row;
	cout << "The minor element of the row " << row << " is " << getMinorElementRow(matrix, ROWS, COLUMNS, row - 1) << endl;

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

int getMinorElementRow(int matrix[][3], int rows, int columns, int row) {
	int minorElement = matrix[row][0];

	for (int i = 1; i < columns; i++)
		if (matrix[row][i] < minorElement)
			minorElement = matrix[row][i];

	return minorElement;
}
