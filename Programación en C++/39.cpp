/** Video 94
 * This program asks for the number of students, their names, ages, and averages, and then prints
 * the details of the student with the highest average.
 */
#include <iostream>
#include <stdio_ext.h>
using namespace std;


struct Student {
	char name[20];
	int age;
	float average;
};


void askData(Student*, int);
Student getBestStudent(Student*, int);
void printStudent(Student);


int main() {
	Student students[3]; int studentsNumber;
	Student* pStudents = students;

	cout << "Write the number of students: "; cin >> studentsNumber;
	cout << endl;

	askData(pStudents, studentsNumber);
	printStudent(getBestStudent(pStudents, studentsNumber));

	return 0;
}


void askData(Student* pStudents, int studentsNumber) {
	for (int i = 0; i < studentsNumber; i++) {
		__fpurge(stdin);
		cout << "Write the name of the student " << i + 1 << ": "; cin.getline((pStudents + i) -> name, 20, '\n');
		cout << "Write the age of the student " << i + 1 << ": "; cin >> (pStudents + i) -> age;
		cout << "Write the average of the student " << i + 1 << ": "; cin >> (pStudents + i) -> average;
		cout << endl;
	}
}

Student getBestStudent(Student* pStudents, int studentsNumber) {
	Student bestStudent = *pStudents;

	for (int i = 1; i < studentsNumber; i++) {
		if ((pStudents + i) -> average > bestStudent.average) {
			bestStudent = *(pStudents + i);
		}
	}
	return bestStudent;
}

void printStudent(Student student) {
	cout << "Name: " << student.name << endl;
	cout << "Age: " << student.age << endl;
	cout << "Average: " << student.average << endl;
	cout << endl;
}
