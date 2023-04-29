require("./JOURNAL")
/* ------------------------- Computing a correlation ------------------------ */

/*
    ϕ = n_11 * n_00 - n_10 * n_01 /
        sqrt(n_1X * n_0X * n_X1 * n_X0)

    The 1's indicates true and the 0's false.
*/


function phi(table) { // [n_00, n_01, n_10, n_11]
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
}

/* More visual way
function phi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) *
                (n00 + n01) *
                (n01 + n11) *
                (n00 + n10));
}
*/

// Test--
// console.log(phi([76, 9, 4, 1]));


/*
    For create the table for an event, we set the following data structure [n_00, n_01, n_10, n_11]:

    - The first number represent the squirrel.
    - The second number represents the event.
*/

function tablefor (event, journal) {
    let table = [0, 0, 0, 0];

    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;

        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

// Test---
// console.log(tablefor ("pizza", JOURNAL));

/* --------------------------- The final analysis --------------------------- */

function journalEvents(journal) {
    let events = [];

    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

// Test---
// console.log(journalEvents(JOURNAL));

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tablefor (event, JOURNAL));

    if (correlation > 0.1 || correlation < -0.1) { // To see the most relevant ones
        console.log(event + ":", correlation);
    }
}

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}

// Test---
// console.log(phi(tablefor ("peanut teeth", JOURNAL))); // 1 means fully related