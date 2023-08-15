/** Video 90
 * This program counts the frequency of vowels in a user-writed name and prints the results.
 */
#include <iostream>
#include <cctype>
using namespace std;


void countVocals(char[], char[], int*);
void printVocalsFrecuency(char[], int[]);


int main() {
	char name[30] = { 'z' }; // Initialize the array with a character that is not a vowel
	char vowels[5] = { 'a', 'e', 'i', 'o', 'u' };
	int vowelsFrecuency[5] = { 0, 0, 0, 0, 0 };

	cout << "Write your name: "; cin.getline(name, 30, '\n');

	for (int i = 0; i < 30; i++) {
		name[i] = tolower(name[i]);
	}

	countVocals(name, vowels, vowelsFrecuency);
	printVocalsFrecuency(vowels, vowelsFrecuency);
}


void countVocals(char name[], char vowels[], int* vowelsFrecuency) {
	for (int i = 0; i < 30; i++) {
		for (int j = 0; j < 5; j++) {
			if (name[i] == vowels[j]) {
				*(vowelsFrecuency + j) += 1;
				break;
			}
		}
	}
}

void printVocalsFrecuency(char vowels[], int vowelsFrecuency[]) {
	for (int i = 0; i < 5; i++) {
		cout << "Vowel " << vowels[i] << ": " << vowelsFrecuency[i] << endl;
	}
}
