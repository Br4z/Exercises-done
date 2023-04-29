/* -------------------------------- Debugging -------------------------------- */

function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        n = Math.floor(n / base);
    } while (n > 0);
    return sign + result;
}

// Test---
//console.log(numberToString(11, 10));

/* ------------------------------- Exceptions ------------------------------- */

function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    else if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result); // This is a standard JavaScript constructor that
    // creates an object with a message property
}

function look() {
    if (promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

// Test---
// try {
//     console.log("You see", look());
// } catch (error) {
//     console.log("Something went wrong: " + error);
// }

/* ---------------------- Cleaning up after exceptions ---------------------- */

const accounts = {
    a: 100,
    b: 0,
    c: 20
};

function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

function transfer(from, amount) {
    if (accounts[from] < amount) return;
    let progress = 0;

    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    } finally {
        if (progress == 1) {
            accounts[from] += amount;
        }
    }
}

// Test---
//console.log(transfer(a, 20));
//console.log(accounts);

/* --------------------------- Selective catching --------------------------- */

class InputError extends Error {}

function betterPromptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
}

// Test ---
// for (;;) {
//     try {
//         let dir = betterPromptDirection("Where?");
//         console.log("You chose ", dir);
//         break;
//     } catch (e) {
//         if (e instanceof InputError) {
//             console.log("Not a valid direction. Try again.");
//         } else {
//             throw e;
//         }
//     }
// }