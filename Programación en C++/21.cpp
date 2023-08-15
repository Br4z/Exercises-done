/** Video 62
 * The class program calculates the total time by summing up the hours, minutes, and seconds of a given
 * number of registers.
 *
 * The exercise program takes input for a number of people and their names, and separates them into two
 * arrays based on whether they are disabled or not.
 */
#include <iostream>
#include <stdio_ext.h>
using namespace std;


struct Person {
	char name[20];
	bool isDisabled;
};


int main() {
	Person people[100], normalPeople[100], disabledPeople[100];
	/* ---------------------------------- CLASS --------------------------------- */

	// int hours = 0, minutes = 0, seconds = 0, registersNumber;

	// cout << "Write the number of registers: "; cin >> registersNumber;

	// for (int i = 0; i < registersNumber; i++) {
	// 	int inputHours, inputMinutes, inputSeconds;

	// 	cout << "Write the hours of the register " << i + 1 << ": "; cin >> inputHours;
	// 	cout << "Write the minutes of the register " << i + 1 << ": "; cin >> inputMinutes;
	// 	cout << "Write the seconds of the register " << i + 1 << ": "; cin >> inputSeconds;
	// 	cout << endl;

	// 	hours += inputHours; minutes += inputMinutes; seconds += inputSeconds;
	// }

	// minutes += seconds / 60;
	// seconds = seconds % 60;
	// hours += minutes / 60;
	// minutes = minutes % 60;

	// cout << "Total time: " << hours << ":" << minutes << ":" << seconds << endl;

	/* -------------------------------- EXERCISE -------------------------------- */

	int normalPeopleNumber = 0, disabledPeopleNumber = 0, peopleNumber;

	cout << "Write the number of people: "; cin >> peopleNumber;
	cout << endl;

	for (int i = 0; i < peopleNumber; i++) {
		__fpurge(stdin);

		cout << "Write the name of the person " << i + 1 << ": "; cin.getline(people[i].name, 20, '\n');
		cout << "Is the person " << i + 1 << " disabled? (1 = yes, 0 = no): "; cin >> people[i].isDisabled;
		cout << endl;
	}

	for (int i = 0; i < peopleNumber; i ++) {
		if (people[i].isDisabled) {
			disabledPeople[disabledPeopleNumber] = people[i];
			disabledPeopleNumber++;
		} else {
			normalPeople[normalPeopleNumber] = people[i];
			normalPeopleNumber++;
		}
	}

	cout << "NOT disabled people" << endl;
	for (int i = 0; i < normalPeopleNumber; i++) {
		cout << "Name: " << normalPeople[i].name << endl;
		cout << "Is disabled: " << normalPeople[i].isDisabled << endl;
		cout << endl;
	}

	cout << "Disabled people" << endl;
	for (int i = 0; i < disabledPeopleNumber; i++) {
		cout << "Name: " << disabledPeople[i].name << endl;
		cout << "Is disabled: " << disabledPeople[i].isDisabled << endl;
		cout << endl;
	}

	return 0;
}
