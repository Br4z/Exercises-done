
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

console.log(arrayToList([10, 20, 30]));

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

console.log(listToArray(arrayToList([10, 20, 30])));

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

console.log(nth(arrayToList([10, 20, 30]), 1));