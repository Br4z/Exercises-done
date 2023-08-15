/** Video 95 and 96
 * This program implements a stack data structure using a linked list.
 */
#include <iostream>
using namespace std;


struct Node {
	int value;
	Node* next;
};


void menu(Node* &, int);
void push(Node* &, int);
int pop(Node* &);
void printStack(Node*);
void emptyStack(Node* &);


int main() {
	Node* stack = nullptr; int option;

	do {
		cout << "Menu" << endl;
		cout << "1. Insert an element." << endl;
		cout << "2. Remove and print the top element (pop)." << endl;
		cout << "3. Print the stack." << endl;
		cout << "4. Empty the stack." << endl;
		cout << "5. Exit." << endl;

		cout << "Write an option: "; cin >> option;
		system("clear");
		menu(stack, option);
	} while (option != 5);

	return 0;
}


void menu(Node* &stack, int option) {
	int number;
	switch (option) {
		case 1:
			cout << "Write the number: "; cin >> number;
			push(stack, number);
			break;
		case 2:
			cout << "The element removed was " << pop(stack) << endl;
			break;
		case 3:
			printStack(stack);
			break;
		case 4:
			emptyStack(stack);
			break;
		default:
			break;
	}
}

void push(Node* &stack, int value) {
	Node* newNode = new Node();
	newNode -> value = value;
	newNode -> next = stack;
	stack = newNode;
}

int pop(Node* &stack) {
	if (!stack) return -1; // Error (stack is empty)
	else {
		int value = stack -> value;
		Node* aux = stack;
		stack = aux -> next;
		delete aux;

		return value;
	}
}

void printStack(Node* stack) {
	while (true) {
		if (!stack) {
			cout << "NULL";
			break;
		} else cout << stack -> value << " -> ";

		stack = stack -> next;
	}
	cout << endl;
}

void emptyStack(Node*& stack) {
	while (stack) {
		Node* aux = stack;
		stack = aux -> next;
		delete aux;
	}
}
