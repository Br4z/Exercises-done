/** Video 104, 105, 106, 107 and 108
 * This program implements a singly linked list and provides functions to add
 * nodes, delete nodes, search for a value, print the list, and empty the list.
 */
#include <iostream>
using namespace std;


struct Node {
	int value;
	Node* next;
};


void menu(Node* &, int);
void push(Node* &, int);
void deleteNode(Node* &, int);
bool search(Node*, int);
void printList(Node*);
void emptyList(Node* &);


int main() {
	Node* list = nullptr; int option;

	do {
		cout << "Menu" << endl;
		cout << "1. Insert an element (node)." << endl;
		cout << "2. Delete a element (node)." << endl;
		cout << "3. Print the list." << endl;
		cout << "4. Empty the list." << endl;
		cout << "5. Exit." << endl;

		cout << "Write an option: "; cin >> option;
		system("clear");
		menu(list, option);

	} while (option != 5);

	return 0;
}


void menu(Node* &list, int option) {
	int number;
	switch (option) {
		case 1:
			cout << "Write the number: "; cin >> number;
			push(list, number);
			break;
		case 2:
			cout << "Write the number of the node (value) you want to delete: "; cin >> number;
			deleteNode(list, number);
			break;
		case 3:
			printList(list);
			break;
		case 4:
			emptyList(list);
			break;
		default:
			break;
	}
}

void push(Node* &list, int value) {
	Node* newNode = new Node();
	newNode -> value = value;

	Node* prev = nullptr;
	Node* next = list;

	while (next && (next -> value < value)) { // (next -> value > value) for descending order
		prev = next;
		next = next -> next;
	}

	if (list == next) { // Insert at beginning of the list
		list = newNode;
	} else {
		prev -> next = newNode;
	}

	newNode -> next = next;
}

void deleteNode(Node* &list, int value) {
	if (list) {
		Node* prev = nullptr;
		Node* next = list;

		while (next && (next -> value != value) && (next -> value < value)) {
			prev = next;
			next = next -> next;
		}

		if (!next) cout << "The value " << value << " is NOT in the list" << endl;
		else {
			if (prev == nullptr) { // Delete the first node
				list = list -> next;
			} else {
				prev -> next = next -> next;
			}
			delete next;
		}
	} else cout << "The list is empty" << endl;
}

bool search(Node* list, int value) {
	while (!list && list -> value <= value) {
		if (list -> value == value) return true;
		list = list -> next;
	}
	return false;
}

void printList(Node* list) {
	while (true) {
		if (!list) {
			cout << "NULL";
			break;
		}
		else {
			cout << list -> value << " -> ";
		}
		list = list -> next;
	}
	cout << endl;
}

void emptyList(Node* &list) {
	Node* aux;

	while (list) {
		aux = list;
		list = list -> next;
		delete aux;
	}
}
