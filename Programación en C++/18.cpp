/** Video 56 and 58
 * This program defines structs for Person, Location, and Employee, initializes instances of Person
 * and Employee, and prints their information.
 */
#include <iostream>
#include <stdio_ext.h>
using namespace std;


struct Person {
	char name[20];
	int age;
};

struct Location {
	char address[20];
	char city[20];
};

struct Employee {
	char name[20];
	Location location;
	int salary;
};


int main() {
	Person person1 = { "Juan", 20 }, person2 = { "Maria", 18 }, person3;
	Employee employees[2]; int employeesNumber = 2;

	/* ----------------------------------- 56 ----------------------------------- */

	// cout << "The name of the first person is " << person1.name << " and his age is " << person1.age << endl;
	// cout << "The name of the second person is " << person2.name << " and his age is " << person2.age << endl;

	// cout << "Write the name of the third person: "; cin.getline(person3.name, 20, '\n');
	// cout << "Write the age of the third person: "; cin >> person3.age;

	// cout << "The name of the third person is " << person3.name << " and his age is " << person3.age << endl;

	/* ----------------------------------- 58 ----------------------------------- */

	for (int i = 0; i < employeesNumber; i++) {
		__fpurge(stdin); // fflush(stdin) for Linux

		cout << "Write the name of the employee " << i + 1 << ": "; cin.getline(employees[i].name, 20, '\n');
		cout << "Write the address of the employee " << i + 1 << ": "; cin.getline(employees[i].location.address, 20, '\n');
		cout << "Write the city of the employee " << i + 1 << ": "; cin.getline(employees[i].location.city, 20, '\n');
		cout << "Write the salary of the employee " << i + 1 << ": "; cin >> employees[i].salary;
	}

	cout << endl;

	for (int i = 0; i < employeesNumber; i++) {
		cout << "The name of the employee " << i + 1 << " is " << employees[i].name << endl;
		cout << "The address of the employee " << i + 1 << " is " << employees[i].location.address << endl;
		cout << "The city of the employee " << i + 1 << " is " << employees[i].location.city << endl;
		cout << "The salary of the employee " << i + 1 << " is " << employees[i].salary << endl;
		cout << endl;
	}

	return 0;
}
