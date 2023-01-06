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

//console.log(phi([76, 9, 4, 1]));

if(typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports)) module.exports = phi;
if(typeof global != "undefined" && !global.phi) global.phi = phi;