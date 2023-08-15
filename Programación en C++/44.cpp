/** Video 113, 114, 115, 116, 117, 118, 119, 120, 121, 122
 * This program is an implementation of a binary search tree, including functions for inserting
 * nodes, deleting nodes, searching for a node, and traversing the tree in pre-order, in-order, and
 * post-order.
 */
#include <iostream>
using namespace std;


struct Node {
	int value;
	Node* parent;
	Node* right;
	Node* left;
};


void menu(Node* &, int);
Node* createNode(Node*, int);
void insert(Node* &, Node*, int);//(Node* &, int);
Node* getMinimum(Node* &);
Node* getSucessor(Node* &);
void deleteNode(Node* &);
int height(Node*);
void searchToDelete(Node* &, int);
void preOrder(Node*);
void inOrder(Node*);
void postOrder(Node*);
void printRotateTree(Node*, int);
void emptyTree(Node* &);


int main() {
	Node* tree = nullptr; int option;

	do {
		cout << "Menu" << endl;
		cout << "1. Insert an element (node)." << endl;
		cout << "2. Delete a element (node)." << endl;
		cout << "3. Print the tree." << endl;
		cout << "4. Empty the tree." << endl;
		cout << "5. Exit." << endl;

		cout << "Write an option: "; cin >> option;
		system("clear");
		menu(tree, option);

	} while (option != 5);

	return 0;
}


void menu(Node* &tree, int option) {
	int number; Node* nodeToDelete = nullptr;
	switch (option) {
		case 1:
			cout << "Write the number: "; cin >> number;
			insert(tree, tree, number);
			break;
		case 2:
			cout << "Write the number of the node (value) you want to delete: "; cin >> number;
			searchToDelete(tree, number);
			break;
		case 3:
			printRotateTree(tree, 0);
			break;
		case 4:
			emptyTree(tree);
			break;
		default:
			break;
	}
}

Node* createNode(Node* parent, int value) {
	Node* newNode = new Node();
	newNode -> value = value;
	newNode -> parent = parent;
	newNode -> right = nullptr;
	newNode -> left = nullptr;

	return newNode;
}

void insert(Node* &tree, Node* parent, int value) {
	if (!tree) tree = createNode(parent, value);
	else {
		if (value < tree -> value) {
			insert(tree -> left, tree, value);
		} else {
			insert(tree -> right, tree, value);
		}
	}
}

// void insert(Node* &tree, int value) {
// 	if (!tree) tree = createNode(tree, value);
// 	else {
// 		Node* aux = tree;
// 		Node* parent;

// 		while (aux) {
// 			parent = aux;

// 			if (value < aux -> value) aux = aux -> left;
// 			else aux = aux -> right; // value >= aux -> value
// 		}

// 		if (value < parent -> value) parent -> left = createNode(parent, value);
// 		else parent -> right = createNode(parent, value); // value >= aux -> value
// 	}
// }

/* ------------------------------ DELETE A NODE ----------------------------- */

Node* getMinimum(Node* &node) {
	if (!node -> right) return node;
	else return getMinimum(node -> right);
}

Node* getSucessor(Node* &node) {
	if (node -> right) return getMinimum(node -> right);

	Node* y = node -> parent;

	while (y && node == y -> right) {
		node = y;
		y = y -> parent;
	}
	return y;
}

void deleteNode(Node* &node) {
	if (!node) return;
	else { // Valid node
		if (node -> left && node -> right) { // twoChildren
			Node* sucessor = getSucessor(node);
			node -> value = sucessor -> value;
			deleteNode(sucessor);
		} else if (node -> left || node -> right) { // oneChild
			if (node -> parent) {
				Node* parent = node -> parent;

				if (parent -> left == node) {
					if (node -> left) {
						node -> left -> parent = parent;
						parent -> left = node -> left;
					} else {
						node -> right -> parent = parent;
						parent -> left = node -> right;
					}
				} else { // parent -> right == node
					if (node -> left) {
						node -> left -> parent = parent;
						parent -> right = node -> left;
					} else {
						node -> right -> parent = parent;
						parent -> right = node -> right;
					}
				}
				delete node;
			} else { // Root
				if (node -> left) {
					*node = *node -> left;
					node -> parent = nullptr;
				} else {
					*node = *node -> right;
					node -> parent = nullptr;
				}
			}
		} else { // noChild
			if (!node -> parent) { // Root
				node = nullptr;
			} else {
				Node* parent = node -> parent;

				if (parent -> left == node) {
					parent -> left = nullptr;
				} else parent -> right = nullptr;

				delete node;
			}
		}
	}
}

/* -------------------------------------------------------------------------- */

int height(Node* tree) {
	if (!tree) return 0;
	else {
		int leftHeight = height(tree -> left);
		int rightHeight = height(tree -> right);

		if (leftHeight > rightHeight) return leftHeight + 1;
		else return rightHeight + 1;

		// return max(leftHeight, rightHeight) + 1;
	}
}

void searchToDelete(Node* &tree, int value) {
	if (!tree) return;
	else if (value == tree -> value) return deleteNode(tree);
	else if (value < tree -> value) return searchToDelete(tree -> left, value);
	else return searchToDelete(tree -> right, value); // value > tree -> value
}

/* -------------------------------- TRAVERSAL ------------------------------- */

void preOrder(Node* tree) { // Root, left, right
	if (!tree) return;
	else {
		cout << tree -> value << " ";
		preOrder(tree -> left);
		preOrder(tree -> right);
	}
}

void inOrder(Node* tree) { // Left, root, right
	if (!tree) return;
	else {
		inOrder(tree -> left);
		cout << tree -> value << " ";
		inOrder(tree -> right);
	}
}

void postOrder(Node* tree) { // Left, right, root
	if (!tree) return;
	else {
		postOrder(tree -> left);
		postOrder(tree -> right);
		cout << tree -> value << " ";
	}
}

/* -------------------------------------------------------------------------- */

void printRotateTree(Node* tree, int level = 0) { // 90 degrees rotated to the left
	if (!tree) return;
	else {
		// In order walk
		printRotateTree(tree -> right, level + 1);

		for (int i = 0; i < level; i++) cout << "   ";
		cout << tree -> value << endl;

		printRotateTree(tree -> left, level + 1);
	}
}

void emptyTree(Node* &tree) {
	while (tree) {
		deleteNode(tree);
	}
}
