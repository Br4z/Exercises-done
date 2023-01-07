/* --------------------------- The sum of a range --------------------------- */

/*
    Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up
    to (and including) end.

    As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when
    building the array. If no step is given, the elements go up by increments of one.
*/

function range(start, end, step = 1) {
    let array = [];

    if(step < 0) for(let i = start; i >= end; i += step) array.push(i);
    else for(let i = start; i <= end; i += step) array.push(i);

    return array;
}

// Test---
// console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1)); // [5, 4, 3, 2]

/*
    Write a sum function that takes an array of numbers and returns the sum of these numbers.
*/

function sum(array) {
    let sum = 0;

    for(let number of array) sum += number;

    return sum;
}

// Test---
// console.log(sum(range(1, 10))); // 55

/* --------------------------- Reversing an array --------------------------- */

// The function reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

function reverseArray(array) {
    let reversedArray = [];

    for(let i = array.length - 1; i >= 0; i--) reversedArray.push(array[i]);

    return reversedArray;
}

// Test---
// console.log(reverseArray(["A", "B", "C"])); // ["C", "B", "A"]

// The function reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.

function reverseArrayInPlace(array) {
    let length = array.length;

    for(let i = 0; i < Math.floor(length / 2); i++) { // We divide the problem in half, we can call it "mirror inverted"
        // We use Math.floor approximation, because the middle element (if it has) always results in the same position
        // it occurs when the array has odd number of elements
        let old = array[i];

        array[i] = array[(length - 1) - i];
        array[(length - 1) - i] = old;
    }

    return array;
}

// Test---
// let arrayValue = [1, 2, 3, 4, 5]; 
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // [5, 4, 3, 2, 1]

/* --------------------------------- A list --------------------------------- */


// Function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

function arrayToList(array) {
    /*
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
    */

    let list = null;
    let length = array.length;

    if(length == 0) return null // array.isEmpty
    else list = {value : array.shift(), rest : arrayToList(array)};

    return list;
}

// Test---
// console.log(arrayToList([10, 20, 30])); // {value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}

// Function listToArray function that produces an array from a list.

function listToArray(list, array = []) {
    /* Another way to do it
    let array = [];

    for(let node = list; node; node = node.rest) array.push(node.value);

    return array;
    */

    if(list) {
        array.push(list.value);

        listToArray(list.rest, array);
    }
    return array;
}

// Test---
// console.log(listToArray(arrayToList([10, 20, 30]))); // [10, 20, 30]

// Add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list.

function prepend(value, rest) { // value = element, rest = list
    return {value, rest};
}

/*
    Function nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to
    the first element) or undefined when there is no such element.
*/

function nth(list, index) {
    if(!list) return undefined;
    else if(index == 0) return list.value;
    else return nth(list.rest, index - 1);
}

// Test---
// console.log(nth(arrayToList([10, 20, 30]), 1)); // 20

/* ---------------------------- Deep comparison ---------------------------- */

/*
    function deepEqual that takes two values and returns true only if they are the same value or are objects with the same
    properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
*/

function deepEqual(a, b) {
    if(a === b) return true;
    else if(a == null || typeof a != "object" ||
    b == null || typeof b != "object") return false; // null is an object
    else {
        let keysA = Object.keys(a), keysB = Object.keys(b)

        if(keysA.length != keysB.length) return false;

        for(let key of keysA) {
            if(!keysB.includes(key) || !deepEqual(a[key], b[key])) return false; // If none of the calls return true, that means that
            // the objects are the same
        }

        return true;
    }
}

// Test---
// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj)); // true
// console.log(deepEqual(obj, {here : 1, object : 2})); // false
// console.log(deepEqual(obj, {here : {is: "an"}, object : 2})); // true