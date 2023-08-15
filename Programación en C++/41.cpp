/** Video 100 and 101
 * The program is an implementation of a queue data structure.
 */
#include <iostream>
using namespace std;


struct Node {
	int value;
	Node* next;
};


void menu(Node* &, Node* &, int);
void push(Node* &, Node* &, int);
int pop(Node* &, Node* &);
void printQueue(Node*);
void emptyQueue(Node* &);


int main() {
	Node* front = nullptr; Node* back = nullptr; int option;

	do {
		cout << "Menu" << endl;
		cout << "1. Insert an element." << endl;
		cout << "2. Remove and print the next element (pop)." << endl;
		cout << "3. Print the queue." << endl;
		cout << "4. Empty the queue." << endl;
		cout << "5. Exit." << endl;

		cout << "Write an option: "; cin >> option;
		system("clear");
		menu(front, back, option);

	} while (option != 5);

	return 0;
}

void menu(Node* &front, Node* &back, int option) {
	int number;
	switch (option) {
		case 1:
			cout << "Write the number: "; cin >> number;
			push(front, back, number);
			break;
		case 2:
			cout << "The element removed was " << pop(front, back) << endl;
			break;
		case 3:
			printQueue(front);
			break;
		case 4:
			emptyQueue(front);
			break;
		default:
			break;
	}
}

void push(Node* &front, Node* &back, int value) {
	Node* newNode = new Node();
	newNode -> value = value;
	newNode -> next = nullptr;

	if (front == nullptr) front = newNode; // If the queue is empty
	else back -> next = newNode;

	back = newNode;
}

int pop(Node* &front, Node* &back) {
	if (!front) return -1; // Error (queue is empty)
	else {
		int value = front -> value;
		Node* aux = front;

		if (front == back) back = nullptr; // If the queue has only one node

		front = front -> next;
		delete aux;

		return value;
	}
}

void printQueue(Node* front) {
	while (true) {
		if (!front) {
			cout << "NULL";
			break;
		}
		else cout << front -> value << " -> ";

		front = front -> next;
	}
	cout << endl;
}

void emptyQueue(Node* &front) {
	Node* aux;

	while (front) {
		aux = front;
		front = front -> next;
		delete aux;
	}
}
