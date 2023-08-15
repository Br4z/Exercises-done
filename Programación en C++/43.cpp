/** Video 109
 * This program creates a linked list, asks the user for input to populate the list, and then finds
 * the minimum and maximum values in the list.
 */
#include <iostream>
using namespace std;


struct Node {
	int value;
	Node* next;
};


void askData(Node* &, int);
void add(Node* &, int);
void searchMinMax(Node*, int, int &, int &);
void printList(Node*);
void emptyList(Node* &);


int main() {
	Node* list = nullptr;
	int nodesNumber, min, max;

	cout << "Write the number of nodes: "; cin >> nodesNumber;
	cout << endl;
	askData(list, nodesNumber);
	cout << endl;
	printList(list);
	cout << endl;

	searchMinMax(list, nodesNumber, min, max);

	cout << "The minimum value is " << min << endl;
	cout << "The maximum value is " << max << endl;

	emptyList(list);

	return 0;
}


void askData(Node* &list, int nodesNumber) {
	int value;
	for (int i = 0; i < nodesNumber; i++) {
		cout << "Enter a number: "; cin >> value;
		add(list, value);
	}
}

void add(Node* &list, int value) {
	Node* newNode = new Node();
	newNode -> value = value;
	newNode -> next = list;

	list = newNode; // Inserting at the beginning is more efficient (O(1))
}

void searchMinMax(Node* list, int nodesNumber, int &min, int &max) {
	max = list -> value;
	min = list -> value;

	for (int i = 1; i < nodesNumber; i++) {
		if (list -> value > max) max = list -> value;
		if (list -> value < min) min = list -> value;
		list = list -> next;
	}
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
