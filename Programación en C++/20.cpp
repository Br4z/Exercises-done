/** Video 61
 * This program allows the user to input information about a number of students, including their
 * names, IDs, and grades, and then calculates the average grade for each student and determines the
 * student with the highest average grade.
 */
#include <iostream>
#include <stdio_ext.h>
using namespace std;


struct Grades {
	float math;
	float physics;
	float chemistry;
	float average;
};

struct Student {
	char name[20];
	char id[20];
	Grades grades;
};


int main() {
	Student students[100]; int studentsNumber, bestStudentPosition = 0;

	cout << "Write the number of students: "; cin >> studentsNumber;

	for (int i = 0; i < studentsNumber; i++) {
		__fpurge(stdin);

		cout << "Write the name of the student " << i + 1 << ": "; cin.getline(students[i].name, 20, '\n');
		cout << "Write the ID of the student " << i + 1 << ": "; cin.getline(students[i].id, 20, '\n');
		cout << "Write the math grade of the student " << i + 1 << ": "; cin >> students[i].grades.math;
		cout << "Write the physics grade of the student " << i + 1 << ": "; cin >> students[i].grades.physics;
		cout << "Write the chemistry grade of the student " << i + 1 << ": "; cin >> students[i].grades.chemistry;
		cout << endl;

		students[i].grades.average = (students[i].grades.math + students[i].grades.physics + students[i].grades.chemistry) / 3;
	}

	for (int i = 1; i < studentsNumber; i++) {
		if (students[i].grades.average > students[bestStudentPosition].grades.average) {
			bestStudentPosition = i;
		}
	}

	cout << "Best student" << endl;
	cout << "Name: " << students[bestStudentPosition].name << endl;
	cout << "ID: " << students[bestStudentPosition].id << endl;
	cout << "Average: " << students[bestStudentPosition].grades.average << endl;

	return 0;
}
