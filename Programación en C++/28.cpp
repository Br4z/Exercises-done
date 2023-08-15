/** Video 78
 * This program asks the user for two dates and finds the maximum date among
 * them.
 */
#include <iostream>
using namespace std;


struct Date {
	int day, month, year;
};


Date askForDate();
Date max(Date, Date);


int main() {
	Date date1 = askForDate(), date2 = askForDate();

	cout << "The max date is " << max(date1, date2).day << "/" << max(date1, date2).month << "/" << max(date1, date2).year << endl;

	return 0;
}


Date askForDate() {
	Date date;

	cout << "Enter the day: ";
	cin >> date.day;
	cout << "Enter the month: ";
	cin >> date.month;
	cout << "Enter the year: ";
	cin >> date.year;
	cout << endl;

	return date;
}

Date max(Date date1, Date date2) {
	if (date1.year > date2.year) return date1;
	else if (date1.year < date2.year) return date2;
	else {
		if (date1.month > date2.month) return date1;
		else if (date1.month < date2.month) return date2;
		else {
			if (date1.day > date2.day) return date1;
			else if (date1.day < date2.day) return date2;
			else return date1;
		}
	}
}
