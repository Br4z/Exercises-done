/*
    For create the table for an event, we set the following data structure [n_00, n_01, n_10, n_11]:

    - The first number represent the squirrel.
    - The second number represents the event.
*/
require("./4-Journal")


function tableFor(event, journal) {
    let table = [0, 0, 0, 0];

    for(let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;

        if(entry.events.includes(event)) index += 1;
        if(entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

//console.log(tableFor("pizza", JOURNAL));

if(typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports)) module.exports = tableFor;
if(typeof global != "undefined" && !global.tableFor) global.tableFor = tableFor;