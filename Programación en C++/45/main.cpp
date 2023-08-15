/** Video 123, 124, 125
 * This program allows the user to write, read, and append text to a file.
 */
#include <iostream>
#include <fstream>
using namespace std;


void write(string fileName, string phrase);
void read(string fileName);
void append(string fileName, string text);


int main() {
	string fileName, phrase, text;

	cout << "Writhe the file name: "; getline(cin, fileName);
	cout << "Write a phrase: "; getline(cin, phrase);
	write(fileName, phrase);

	cout << "File content" << endl;
	read(fileName);

	cout << "Write the text you want to append: "; getline(cin, text);
	append(fileName, text);

	cout << "New file content" << endl;
	read(fileName);

	return 0;
}


void write(string fileName, string phrase) {
	ofstream file;

	file.open(fileName.c_str(), ios::out);

	if (file.fail()) {
		exit(1);
	} else {
		file << phrase << endl;

		file.close();
	}
}

void read(string fileName) {
	ifstream file;
	string text;

	file.open(fileName.c_str(), ios::in);

	if (file.fail()) {
		exit(1);
	} else {
		while (!file.eof()) {
			getline(file, text);
			cout << text << endl;
		}

		file.close();
	}
}

void append(string fileName, string text) {
	ofstream file;

	file.open(fileName.c_str(), ios::app);

	if (file.fail()) {
		exit(1);
	} else {
		file << text << endl;

		file.close();
	}
}
