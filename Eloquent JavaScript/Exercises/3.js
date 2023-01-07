/* --------------------------------- Minimum -------------------------------- */

// Write a function min that takes two arguments and returns their minimum.

function min(a, b) {
    if(a < b) console.log(a);
    else console.log(b);
}

// Test---
// console.log(min(0, 10)); // 0
// console.log(min(0, -10)) // -10

/* -------------------------------- Recursion ------------------------------- */

/*
    Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive,
    whole number) and return a Boolean.

    - Zero is even.
    - One is odd.
    - For any other number N, its evenness is the same as N - 2.
    - "-N" and "N" has the same primality.
*/

function isEven(number){
    if(number < 0) return isEven(-number);
    else if(number == 0) return true;
    else if(number == 1) return false;
    else return isEven(number - 2);
}

// Test---
// console.log(isEven(50)); // True
// console.log(isEven(75)); // False
// console.log(isEven(-1)); // False

/* ------------------------------ Bean counting ----------------------------- */

/*
    Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” 
    characters there are in the string.
*/

function countBs(string) {
    let length = string.length;
    let count = 0;

    for(let i = 0; i < length; i++) {
        let char = string[i];

        if(char == "B") count += 1;
    }
    return count;
    /*
    countChar(string, "B");
    */
}

/*
    Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character
    that is to be counted (rather than counting only uppercase “B” characters).
*/

function countChar(string, char) {
    let count = 0;

    for(let currentChar of string) {
        if(currentChar == char) count += 1;
    }
    return count;
}

// Test---
// console.log(countBs("BBC")); // 2
// console.log(countChar("kakkerlak", "k")); // 4