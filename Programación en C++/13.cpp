// Video 40, 41, 42, 43, 44, 45, 46, 47 and 48
#include <iostream>
#include <string.h>
using namespace std;


int main() {
	/* ----------------------------------- 40 ----------------------------------- */

	// char name[] = "Brandon";
	// char name2[] = { 'B', 'r', 'a', 'n', 'd', 'o', 'n' };
	// char name3[20];

	// cout << name << endl << name2 << endl;

	// cout << "Write your name: "; cin.getline(name3, 20, '\n');
	// cout << name3 << endl;

	/* ----------------------------------- 41 ----------------------------------- */

	// char phrase[] = "I am a phrase";
	// int length = strlen(phrase);

	// cout << "The number of characters in the phrase is " << length << endl;

	/* ----------------------------------- 42 ----------------------------------- */

	// char originalPhrase[] = "I am a phrase";
	// char copyPhrase[20];

	// strcpy(copyPhrase, originalPhrase);

	// cout << copyPhrase << endl;

	/* ----------------------------------- 43 ----------------------------------- */

	// char word[100], anotherWord[100];

	// cout << "Write a word: "; cin.getline(word, 100, '\n');
	// cout << "Write another word: "; cin.getline(anotherWord, 100, '\n');

	// if (strcmp(word, anotherWord) == 0) {
	// 	cout << "The words are the same" << endl;
	// } else if (strcmp(word, anotherWord) > 0) {
	// 	cout << word << " is after alphabetically than " << anotherWord << endl;
	// } else {
	// 	cout << word << " is before alphabetically than " << anotherWord << endl;
	// }

	/* ----------------------------------- 44 ----------------------------------- */

	// char message[] = "How are you ", name[20], newMessage[100];

	// cout << "Write your name: "; cin.getline(name, 20, '\n');

	// strcpy(newMessage, message);
	// strcat(newMessage, name);
	// strcat(newMessage, "?");

	// cout << newMessage << endl;

	/* ----------------------------------- 45 ----------------------------------- */

	// char word[100], invertedWord[100];

	// cout << "Write a word: "; cin.getline(word, 100, '\n');

	// strcpy(invertedWord, word);

	// for (int i = 0; i < strlen(word); i++) {
	// 	invertedWord[i] = word[strlen(word) - i - 1];
	// }

	// if (strcmp(word, invertedWord) == 0) {
	// 	cout << "The word is a palindrome" << endl;
	// } else {
	// 	cout << "The word is NOT a palindrome" << endl;
	// }

	/* ----------------------------------- 46 ----------------------------------- */

	// char name[] = "Brandon", nameCopy[100];
	// // strupr(name) // Only work in Windows

	// for (int i = 0; i < strlen(name); i++) {
	// 	nameCopy[i] = toupper(name[i]);
	// }

	// cout << "The name in uppercase is " << nameCopy << endl;

	/* ----------------------------------- 47 ----------------------------------- */

	// char name[] = "BRANDON", nameCopy[100];
	// // strlwr(name) // Only work in Windows

	// for (int i = 0; i < strlen(name); i++) {
	// 	nameCopy[i] = tolower(name[i]);
	// }

	// cout << "The name in lowercase is " << nameCopy << endl;

	/* ----------------------------------- 48 ----------------------------------- */

	// char number[100], anotherNumber[100];

	// cout << "Write a number: "; cin.getline(number, 100, '\n');
	// cout << "Write another number: "; cin.getline(anotherNumber, 100, '\n');

	// int numberInt = atoi(number);
	// float anotherNumberFloat = atof(anotherNumber);

	// cout << "The sum of the two numbers is " << numberInt + anotherNumberFloat << endl;

	return 0;
}
