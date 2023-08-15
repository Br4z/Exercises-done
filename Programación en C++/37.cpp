/** Video 92
 * This program asks the user for the number of rows and columns of a matrix, creates the matrix, calculates
 * its transpose, and then prints both the original and transpose matrix.
 */
#include <iostream>
using namespace std;


void askData(int** &, int &, int &);
int** getTransposeMatrix(int**, int, int);
void printMatrix(int**, int, int);
void cleanMemory(int** &, int, int);


int main() {
	int** matrix; int** transposeMatrix; int rows, columns;

	askData(matrix, rows, columns);
	printMatrix(matrix, rows, columns);

	transposeMatrix = getTransposeMatrix(matrix, rows, columns);
	printMatrix(transposeMatrix, columns, rows);

	cleanMemory(matrix, rows, columns);
	cleanMemory(transposeMatrix, columns, rows);

	return 0;
}


void askData(int** &matrix, int &rows, int &columns) {
	cout << "Write the number of rows: "; cin >> rows;
	cout << "Write the number of columns: "; cin >> columns;

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

int** getTransposeMatrix(int** matrix, int rows, int columns) {
	int** newMatrix;

	newMatrix = new int* [columns];

	for (int i = 0; i < columns; i++) {
		newMatrix[i] = new int [rows];
	}

	for (int i = 0; i < rows; i++) {
		for (int j = 0; j < columns; j++) {
			*(*(newMatrix + j) + i) = *(*(matrix + i) + j); // newMatrix[j][i] = matrix[i][j]
		}
	}
	return newMatrix;
}

void printMatrix(int** matrix, int rows, int columns) {
	for (int i = 0; i < rows; i++) {
		for (int j = 0; j < columns; j++) {
			cout << *(*(matrix + i) + j) << " ";
		}
		cout << endl;
	}
	cout << endl;
}

void cleanMemory(int** &matrix, int rows, int columns) {
	for (int i = 0; i < rows; i++) {
		delete[] matrix[i];
	}
	delete[] matrix;
}
