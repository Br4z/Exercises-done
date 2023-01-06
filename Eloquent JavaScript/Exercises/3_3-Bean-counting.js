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

console.log(countBs("BBC"));

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

console.log(countChar("kakkerlak", "k"));