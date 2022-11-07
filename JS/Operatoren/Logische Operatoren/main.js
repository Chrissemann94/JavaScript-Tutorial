"use strict";

// logisches "und" &&
// logisches "oder" ||
// logisches "nicht" !

console.log(1 > 0 && 4 < 6);    // true         Alle Bedingungen müssen true sein --> true
console.log(1 > 0 && 6 < 4);    // false

console.log(1 > 0 || 4 < 6);    // true         Eine der Bedingungen muss true sein --> true
console.log(1 > 0 || 6 < 4);    // true

console.log(1 > 0 && !(6 < 4)); // true         Nicht-Operator kehrt Wahrheitswert um
console.log(!true);             // false


console.log(1 > 0 && 4 < 6 && 10 < 20); // true
console.log(1 > 0 && 4 < 6 && 10 > 20); // false

console.log(1 > 0 && 4 < 6 || 10 > 20); // true

console.log(1 < 0 && (10 > 20 || 4 < 6))        // Klammern werden zuerst berechnet