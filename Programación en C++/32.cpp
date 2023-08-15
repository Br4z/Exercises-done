/** Video 86
 * This program allows the user to enter a number of scores, fills an array with those
 * scores, and then prints them out.
 */
#include <iostream>
using namespace std;


void askData(int, int* &);
void printData(int, int*);


int main() {
	int scoresNumber; int* scores;

	cout << "Enter the number of scores: "; cin >> scoresNumber;
	cout << endl;

	askData(scoresNumber, scores);
	cout << endl;
	printData(scoresNumber, scores);

	delete[] scores; // delete &scores[0]

	return 0;
}


void askData(int scoresNumber, int* &scores) {
	scores = new int[scoresNumber]; // scores = &(new int[scoresNumber])[0]

	for (int i = 0; i < scoresNumber; i++) {
		cout << "Enter the score " << i + 1 << ": "; cin >> scores[i];
	}
}

void printData(int scoresNumber, int* scores) {
	for (int i = 0; i < scoresNumber; i++) {
		cout << "Score " << i + 1 << ": " << scores[i] << endl;
	}
}
