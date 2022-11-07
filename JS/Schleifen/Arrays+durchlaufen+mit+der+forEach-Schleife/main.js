"use strict";

let zahlen = [5, 56, 47, 8, 49, 35, 3, 67, 90];

console.log(zahlen);

/*
for (let i = 0; i < zahlen.length; i++) {
    console.log(zahlen[i]);
}
*/

/*
let meine_funktion = function(e) {
    console.log(e);
};

zahlen.forEach(meine_funktion);
*/

zahlen.forEach(function(e) {
    console.log(e);
});