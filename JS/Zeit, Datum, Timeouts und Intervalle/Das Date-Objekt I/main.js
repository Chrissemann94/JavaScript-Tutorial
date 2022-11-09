"use strict";

let d = new Date();
console.log(d)      // gibt das aktuelle Datum aus

console.log(Date.now());         // Gibt die Unix-Zeit aus

let e = new Date(1469168082927);    // Unix-Zeit, gibt 22 Juli 2016 aus
console.log(e);

let f = new Date("Sep 23 2003 07:52:22 GMT+0200");  // Datum-String mit ISO 8601
console.log(f);

// new Date(jahr, Monats-index[, tag[, stunde[, minute[, sekunde[, millisekunde]]]]]);
let g = new Date(2012, 5, 23, 15, 15, 15, 155)       // gibt Juni 2012 aus
console.log(g);

