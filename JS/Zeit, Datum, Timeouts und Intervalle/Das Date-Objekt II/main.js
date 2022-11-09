"use strict";

let d = new Date();

d.setFullYear(1996);        // Set-Methoden
d.setMonth(0);
d.setDate(16);
d.setHours(9);
d.setMinutes(32);
d.setSeconds(12);
d.setMilliseconds(111);

console.log(d.getFullYear());        // Get-Methoden
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

console.log(d);


let dUTC = new Date();

dUTC.setUTCFullYear(1996);        // Set-Methoden mit Weltzeit UTC
dUTC.setUTCMonth(0);
dUTC.setUTCDate(16);
dUTC.setUTCHours(9);
dUTC.setUTCMinutes(32);
dUTC.setUTCSeconds(12);
dUTC.setUTCMilliseconds(111);

console.log(dUTC);

console.log(d.getUTCFullYear());        // Get-Methoden mit Weltzeit UTC
console.log(d.getUTCMonth());
console.log(d.getUTCDate());
console.log(d.getUTCHours());
console.log(d.getUTCMinutes());
console.log(d.getUTCSeconds());
console.log(d.getUTCMilliseconds());

let dUnix = new Date();

dUnix.setTime(1568557000000);           // Set-Methode mit Unix 
console.log(dUnix);

console.log(getTime(dUnix));            // Get-Methode mit Unix