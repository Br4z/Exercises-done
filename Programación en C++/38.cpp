/** Video 93
 * This program asks the user for their name and age, stores the data in a struct, and then prints
 * it out.
 */
#include <iostream>
using namespace std;


struct Person {
	char name[20];
	int age;
};


void askData(Person*);
void printData(Person*);


int main() {
	Person person;
	Person* pPerson = &person;

	askData(pPerson);
	printData(pPerson);

	return 0;
}


void askData(Person* pPerson) {
	cout << "Write your name: "; cin >> pPerson -> name;
	cout << "Write your age: "; cin >> pPerson -> age;
	cout << endl;
}

void printData(Person* pPerson) {
	cout << "Name: " << pPerson -> name << endl;
	cout << "Age: " << pPerson -> age << endl;
}
