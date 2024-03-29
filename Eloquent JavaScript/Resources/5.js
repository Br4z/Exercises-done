require('./SCRIPTS')
/* ---------------------------- Filtering arrays ---------------------------- */

// To find the scripts in the data set that are still in use.

function filter(array, test) {
    let passed = [];

    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

// Test---
// console.log(filter(SCRIPTS, (script) => script.living));

/* -------------------------- Transforming with map ------------------------- */

function map(array, transform) {
    let mapped = [];

    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

// Test---
// let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
// console.log(map(rtlScripts, s => s.name));

/* ------------------------- Summarizing with reduce ------------------------ */

function reduce(array, combine, start) {
    let current = start;

    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

// Test---
// console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

// Test---
// console.log(SCRIPTS.reduce((a, b) => {
//     return characterCount(a) < characterCount(b) ? b : a;
// }));

/* ------------------------------ Composability ----------------------------- */

/* A way without higher-order functions
let biggest = null;
for (let script of SCRIPTS) {
    if (biggest == null || characterCount(biggest) < characterCount(script)) biggest = script;
}
console.log(biggest);
*/

function average(array) {return array.reduce((a, b) => a + b) / array.length;}

// Test---
// console.log(Math.round(average(
//     SCRIPTS.filter(s => s.living).map(s => s.year))));

//console.log(Math.round(average(
//    SCRIPTS.filter(s => !s.living).map(s => s.year))));
// So the dead scripts in Unicode are, on average, older than the living ones

/* Another way
let total = 0, count = 0;
for (let script of SCRIPTS) {
    if (script.living) {
        total += script.year;
        count += 1;
    }
}
console.log(Math.round(total / count));
*/

/* ----------------------- Strings and character codes ---------------------- */

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {return code >= from && code < to;})) {
            return script;
        }
    }
    return null;
}

// Test---
// console.log(characterScript(121));

/* ---------------------------- Recognizing text ---------------------------- */

function countBy(items, groupName) {
    let counts = [];

    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);

        if (known == -1) {
            counts.push({name, count: 1});
        } else {
        counts[known].count++;
        }
    }
    return counts;
}

// Test---
// console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0); // (count, char) => count + char.count
    if (total == 0) return "No scripts found";

    return scripts.map(({name, count}) => { // char
        /*
        let name = char.name;
        let count = char.count;
        */
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

// Test---
// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));

module.exports = {
    countBy,
    characterScript
}