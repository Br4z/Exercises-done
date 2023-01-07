require("../Material/5")
/* ------------------------------- Flattering ------------------------------- */

/*
    Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all
    the elements of the original arrays.
*/

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));

/* ------------------------------ Your own loop ----------------------------- */

/*
    Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an
    update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if
    that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to
    create a new value and starts from the beginning.
*/

function loop(start, test, update, body) {
    for(let value = start; test(value); update(value)) {
        body(value)
    }
}

// Test---
// loop(3, n => n > 0, n => n - 1, console.log);

/* ------------------------------- Everything ------------------------------- */

/*
    Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a
    loop and one using the some method.
*/

function every(array, predicate) {
    for(let element of array) {
        if(!predicate(element)) return false;
    }
    return true;
}

function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}

// Test---
// console.log(every([1, 3, 5], n => n < 10));
// console.log(every([2, 4, 16], n => n < 10));
// console.log(every([], n => n < 10));

function dominantDirection(text) {
    let directions = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({direction}) => direction != "none");


    return directions.reduce((a, b) => {
        return a.count > b.count ? a : b
    }).name;
}

// Test---
// console.log(dominantDirection("Hello!"));
// console.log(dominantDirection("Hey, مساء الخير"));