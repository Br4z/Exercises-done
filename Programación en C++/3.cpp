/** Video 15
 * This program takes a character as input and determines if it is a lowercase vowel, uppercase
 * vowel, or not a vowel.
 */
#include <iostream>
using namespace std;


int main() {
	char letter;

	cout << "Write the character: "; cin >> letter;

	switch (letter) {
	case 'a':
	case 'e':
	case 'i':
	case 'o':
	case 'u':
		cout << "The entered letter is a lowercase vowel" << endl;
		break;
	case 'A':
	case 'E':
	case 'I':
	case 'O':
	case 'U':
		cout << "The entered letter is an uppercase vowel" << endl;
		break;
	default:
		cout << "The entered letter is NOT a vowel" << endl;
		break;
	}

	return 0;
}
