/* ----------------------------- The Date class ----------------------------- */

function getDate(string) {
    let [_, month, day, year] =
        /^(\d{1,2})-(\d{1,2})-(\d{4})\b/.exec(string);
    return new Date(year, month - 1, day);
}

// Test---
//console.log(getDate("11-30-2003")); // Thu Jan 30 2003 00:00:00 GMT+0100 (CET)

/* --------------------------- The replace method --------------------------- */

let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1;
    if(amount == 1) { // only one left, remove the 's'
        unit = unit.slice(0, unit.length - 1);
    } else if(amount == 0) {
        amount = "no";
    }
    return amount + " " + unit;
}

// Test---
//console.log(stock.replace(/(\d+) (\w+)/g, minusOne)); // no lemon, 1 cabbage, and 100 eggs

function stripComments(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

// Test---
//console.log(stripComments("1 /* a */+/* b */ 1")); //  1 + 1

/* ------------------- Dynamically creating RegExp objects ------------------ */

let name = "dea+hl[]rd";
let text = "This dea+hl[]rd guy is super annoying.";
let escaped = name.replace(/[[\.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escaped + "\\b", "gi"); // "gi" for global and case insensitive.

// Test---
console.log(text.replace(regexp, "_$&_")); // This _dea+hl[]rd_ guy is super annoying.


/* -------------------------- Looping over matches -------------------------- */

let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let match;

/* while (match = number.exec(input)) {
    console.log("Found", match[0], "at", match.index);
} */

/* --------------------------- Parsing an INI file -------------------------- */

function parseINI(string) {
    // Start with an object to hold the top-level fields
    let result = {};
    let section = result;
    string.split(/\r?\n/).forEach(line => { // Line break -> \r?\n
        console.log(line);
        let match;
        if(match = line.match(/^(\w+)=(.*)$/)) {
            section[match[1]] = match[2];
        } else if(match = line.match(/^\[(.*)\]$/)) {
            section = result[match[1]] = {};
        } else if(!/^\s*(;.*)?$/.test(line)) {
            throw new Error("Line '" + line + "' is not valid.");
        }
    });
    return result;
}

// Test---
// console.log(parseINI(`
// name=Vasilis
// [address]
// city=Tessaloniki`)); // {name: "Vasilis", address: {city: "Tessaloniki"}}