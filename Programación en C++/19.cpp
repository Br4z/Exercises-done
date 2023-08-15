/** Video 60
 * This program allows the user to input information about a number of athletes and then determines
 * the athlete with the most medals.
 */
#include <iostream>
#include <stdio_ext.h>
using namespace std;


struct Athlete {
	char name[20];
	char country[20];
	int medalsNumber;
};


int main() {
	Athlete athletes[100]; int athletesNumber, bestAthletePosition = 0;

	cout << "Write the number of athletes: "; cin >> athletesNumber;

	for (int i = 0; i < athletesNumber; i++) {
		__fpurge(stdin);

		cout << "Write the name of the athlete " << i + 1 << ": "; cin.getline(athletes[i].name, 20, '\n');
		cout << "Write the country of the athlete " << i + 1 << ": "; cin.getline(athletes[i].country, 20, '\n');
		cout << "Write the number of medals of the athlete " << i + 1 << ": "; cin >> athletes[i].medalsNumber;
		cout << endl;
	}

	for (int i = 1; i < athletesNumber; i++) {
		if (athletes[i].medalsNumber > athletes[bestAthletePosition].medalsNumber) {
			bestAthletePosition = i;
		}
	}

	cout << "Best athlete" << endl;
	cout << "Name: " << athletes[bestAthletePosition].name << endl;
	cout << "Country: " << athletes[bestAthletePosition].country << endl;
	cout << "Medals: " << athletes[bestAthletePosition].medalsNumber << endl;

	return 0;
}
