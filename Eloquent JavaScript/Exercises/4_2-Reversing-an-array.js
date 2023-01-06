// The function reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

function reverseArray(array) {
    let reversedArray = [];

    for(let i = array.length - 1; i >= 0; i--) reversedArray.push(array[i]);

    return reversedArray;
}

console.log(reverseArray(["A", "B", "C"]));

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

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);