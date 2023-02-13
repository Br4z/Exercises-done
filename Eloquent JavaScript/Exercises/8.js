/* ---------------------------------- Retry --------------------------------- */

/*
    Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other 80 percent of
    cases raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just keeps
    trying until a call succeeds, after which it returns the result.
*/

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if(Math.random() < 0.2) {
    return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch(e) {
        if(e instanceof MultiplicatorUnitFailure) return  reliableMultiply(a, b);
        else throw e;
    }
}

// Test---
//console.log(reliableMultiply(8, 8));

/* ----------------------------- The locked box ----------------------------- */

/*
    Write a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and then
    ensures that the box is locked again before returning, regardless of whether the argument function returned normally or
    threw an exception.

    For extra points, make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays unlocked.
*/

const box = {
    locked: true,
    unlock() {this.locked = false;},
    lock() {this.locked = true;},
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let locked = box.locked

    if(!locked) return body;

    box.unlock();
    try {
        return body();
    } finally {
        box.lock(); // Makes sure it will closed after a call
    }
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch(e) {
    console.log("Error raised: " + e);
}

// Test--
//console.log(box.locked); // → true