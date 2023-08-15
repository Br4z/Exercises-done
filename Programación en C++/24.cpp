/** Video 70
 * This program takes an amount of money as input and calculates the number of each denomination
 * (fifties, twenties, tens, fives, ones) needed to make up that amount.
 */
#include <iostream>
using namespace std;


void exchange(int, int &, int &, int &, int &, int &, int &);


int main() {
	int amount, hundreds, fifties, twenties, tens, fives, ones;

	cout << "Enter the amount of money: "; cin >> amount;

	exchange(amount, hundreds, fifties, twenties, tens, fives, ones);

	cout << "Exchange" << endl;
	cout << "Hundreds: " << hundreds << endl;
	cout << "Fifties: " << fifties << endl;
	cout << "Twenties: " << twenties << endl;
	cout << "Tens: " << tens << endl;
	cout << "Fives: " << fives << endl;
	cout << "Ones: " << ones << endl;

	return 0;
}


void exchange(int amount, int &hundreds, int &fifties, int &twenties, int &tens, int &fives, int &ones) {
	hundreds = amount / 100;
	amount %= 100;
	fifties = amount / 50;
	amount %= 50;
	twenties = amount / 20;
	amount %= 20;
	tens = amount / 10;
	amount %= 10;
	fives = amount / 5;
	amount %= 5;
	ones = amount;
}
