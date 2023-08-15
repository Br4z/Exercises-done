/** Video 133 y 136
 * This program demonstrates inheritance and polymorphism by creating a Person class and a Student
 * class that inherits from Person.
 */
#include <iostream>
using namespace std;


class Person {
	private:
		string name;
		int age;
	public:
		Person(string, int);
		~Person();
		virtual void print();
};

Person::Person(string name, int age) {
	this -> name = name;
	this -> age = age;
}

Person::~Person() {

}

void Person::print() {
	cout << "Name: " << name << endl;
	cout << "Age: " << age << endl;
}


class Student : public Person {
	private:
		string code;
		float average;
	public:
		Student(string, int, string, float);
		~Student();
		void print();
};

Student::Student(string name, int age, string code, float average) : Person(name, age) {
	this -> code = code;
	this -> average = average;
}

Student::~Student() {

}

void Student::print() {
	Person::print();
	cout << "Code: " << code << endl;
	cout << "Average: " << average << endl;
}


int main () {
	Person* vector[2];

	vector[0] = new Person("Brandon", 19);
	vector[1] = new Student("Alejandro", 20, "2125974", 4.95);

	vector[0] -> print();
	cout << endl;
	vector[1] -> print();

	return 0;
}
