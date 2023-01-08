/* ------------------------------ A vector type ----------------------------- */

/*
    Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save
    to properties of the same name.

    Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the
    sum or difference of the two vectors’ (this and the parameter) x and y values.

    Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y)
    from the origin (0, 0).
*/

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        let newX = vector.x + this.x;
        let newY = vector.y + this.y;

        return new Vec(newX, newY)
    }

    minus(vector) {
        let newX = vector.x - this.x;
        let newY = vector.y - this.y;

        return new Vec(newX, newY)
    }

    get length() {
        let x = this.x;
        let y = this.y;

        return Math.sqrt(x * x + y * y);
    }
}

// Test---
// console.log(new Vec(1, 2).plus(new Vec(2, 3))); // Vec{x: 3, y: 5}
// console.log(new Vec(1, 2).minus(new Vec(2, 3))); // Vec{x: -1, y: -1}
// console.log(new Vec(3, 4).length); // 5

/* --------------------------------- Groups --------------------------------- */

/*
    Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates
    an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the
    group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

    Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values
    produced by iterating over it.
*/

class Group {
    constructor() {
        this.members = [];
    }

    add(element) {
        if(!this.has(element)) {
            this.members.push(element);
        }
    }

    delete(element) {
        let elementIndex = this.members.indexOf(element) + 1;
        console.log(elementIndex);

        if(elementIndex != 0) { // When indexOf returns "-1"
            this.members = this.members.splice(elementIndex, 1);
        }

        // this.members = this.members.filter(v => v !== value);
    }

    has(element) {
        return this.members.includes(element);
    }

    static from(collection) {
        let group = new Group();

        for(let element of collection) group.add(element);

        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

// Test---
// let group = Group.from([10, 20]);
// console.log(group.has(10)); // true
// console.log(group.has(30)); // false
// group.add(10);
// group.delete(10);
// console.log(group.members);
// console.log(group.has(10)); // false

/* ----------------------------- Iterable groups ---------------------------- */

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }

    next() {
        let members = this.group.members;

        if(this.index >= members.length) return {done: true}; // ">=" in case the index exceded the members.length
        else {
            let value = {index: this.index, value: members[this.index]};
            this.index++;
            return {value, done: false};
        }
    }
}

// Test---
// for(let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
// }

/* --------------------------- Borrowing a method --------------------------- */

// Can you think of a way to call hasOwnProperty on an object that has its own property by that name?

let map = {one: true, two: true, hasOwnProperty: true};


console.log(Object.prototype.hasOwnProperty.call(map, "one")); // true
// We replace the "this" (in the call) for our map to use the original function