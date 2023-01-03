/*
    Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive,
    whole number) and return a Boolean.

    - Zero is even.
    - One is odd.
    - For any other number N, its evenness is the same as N - 2.
    - "-N" and "N" has the same primality.
*/

function isEven(number){
    if(number < 0) return isEven(-number)
    else if(number == 0) return true
    else if(number == 1) return false
    else return isEven(number - 2)
}

console.log(isEven(50)); // True
console.log(isEven(75)); // False
console.log(isEven(-1)); // False