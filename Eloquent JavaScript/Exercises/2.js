/* --------------------------- Looping a triangle --------------------------- */

/*
    expected output:
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

height = 8

for (let i = ""; i.length < height; i += "#") console.log(i);

/* -------------------------------- FizzBuzz -------------------------------- */

/*
    Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3,
    print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/

for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 == 0) output += "Fizz";
    else if (i % 5 == 0) output += "Buzz";

    console.log(output || i);
}


/*
    When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still
    print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let i = 1; i <= 100; i++) {
    let output = "";

    if (i % 3 == 0) output += "Fizz";
    if (i % 5 == 0) output += "Buzz";

    console.log(output || i); // If the output is "", it will display the number
}

/* ------------------------------- Chessboard ------------------------------- */

/*
    Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position
    of the grid there is either a space or a "#" character. The characters should form a chessboard.

    expected output:

     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # # 
     # # # #
    # # # #
*/

var size = 8;
var chessboard = "";

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i + j) % 2 != 0) chessboard += "#"; // odd positions
        else chessboard += " ";
    }
    chessboard += "\n";
}

console.log(chessboard);