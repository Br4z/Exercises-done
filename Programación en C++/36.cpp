/** Video 91
 * This program asks the user for the number of rows and columns of a matrix, dynamically allocates
 * memory for the matrix, fills it with values, and then prints the matrix.
 */
#include <iostream>
using namespace std;


void askData(int** &, int &, int &);
void printMatrix(int** &, int, int);


int main() {
	int** matrix; int rows, columns;

	askData(matrix, rows, columns);
	printMatrix(matrix, rows, columns);

	for (int i = 0; i < rows; i++) {
		delete[] matrix[i];
	}

	delete[] matrix;

	return 0;
}


void askData(int** &matrix, int &rows, int &columns) {
	cout << "Write the number of rows: "; cin >> rows;
	cout << "Write the number of columns: "; cin >> columns;
	cout << endl;

	matrix = new int* [rows];

	for (int i = 0; i < rows; i++) {
		matrix[i] = new int [columns];
	}

	for (int i = 0; i < rows; i++) {
		for (int j = 0; j < columns; j++) {
			// cin >> *(*(matrix + i) + j); // matrix[i][j]
			*(*(matrix + i) + j) = i * (rows) + j;
		}
	}
}

void printMatrix(int** &matrix, int rows, int columns) {
	for (int i = 0; i < rows; i++) {
		for (int j = 0; j < columns; j++) {
			cout << *(*(matrix + i) + j) << " ";
		}
		cout << endl;
	}
	cout << endl;
}
