/** Video 129, 131 and 132
 * This program defines a Date class with various constructors and member functions, and
 * demonstrates their usage in the main function.
 */
#include <iostream>
using namespace std;


class Date {
	private:
		int day;
		int month;
		int year;
	public:
		Date();
		Date(int, int, int); // D/M/Y
		Date(long); // YYYYMMDD
		~Date();
		void printDate();
		void setDay(int);
		void setMonth(int);
		void setYear(int);
		int getDay();
		int getMonth();
		int getYear();
};

Date::Date() {

}

Date::Date(int day, int month, int year) {
	this -> day = day;
	this -> month = month;
	this -> year = year;
}

Date::Date(long date) {
	year = int(date / 10000);
	month = int(date / 100 - year * 100);
	day = int(date - year * 10000 - month * 100);
}

Date::~Date() {

}

void Date::printDate() {
	cout << day << "/" << month << "/" << year << endl;
}

void Date::setDay(int day) {
	this -> day = day;
}

void Date::setMonth(int month) {
	this -> month = month;
}

void Date::setYear(int year) {
	this -> year = year;
}

int Date::getDay() {
	return day;
}

int Date::getMonth() {
	return month;
}

int Date::getYear() {
	return year;
}


void alternativePrintDate(Date);


int main() {
	Date tomorrow = Date(); tomorrow.setDay(10); tomorrow.setMonth(8); tomorrow.setYear(2023);
	Date today = Date(9, 8, 2023);
	Date yesterday = Date(20230808);

	tomorrow.printDate();
	today.printDate();
	yesterday.printDate();

	cout << endl;

	alternativePrintDate(tomorrow);
	alternativePrintDate(today);
	alternativePrintDate(yesterday);

	tomorrow.~Date();
	today.~Date();
	yesterday.~Date();

	return 0;
}


void alternativePrintDate(Date date) {
	cout << date.getDay() << "/" << date.getMonth() << "/" << date.getYear() << endl;
}
