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

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here : 1, object : 2}));
console.log(deepEqual(obj, {here : {is: "an"}, object : 2}));