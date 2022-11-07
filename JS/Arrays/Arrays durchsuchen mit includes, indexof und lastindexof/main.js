"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];

// includes(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt true zurück, wenn das
// Element gefunden wurde, bzw. false, wenn es nicht gefunden wurde.
// Syntax: includes(Suchwert[, Startindex])
// nicht destruktiv

console.log(personen.includes("Marcel"));    // gibt true zurück

console.log(personen.includes("Marcel", 2));  // gibt false zurück


// indexOf(): Durchsucht das Array ab einem Startindex nach einem Wert und gibt den 
// Index der ersten Fundstelle zurück, wenn der Wert gefunden wurde, oder -1, wenn der Wert nicht im Array gefunden wurde
// Syntax: indexOf(Suchwert[, Startindex])
// nicht destruktiv

console.log(personen.indexOf("Marcel"));    // gibt 1 zurück
console.log(personen.indexOf("Marcel", 2));  // gibt -1 zurück


// lastIndexOf(): Durchsucht das Array ab einem Startindex rückwarts nach einem Wert und gibt 
// den Index der ersten Fundstelle zurück, wenn der Wert gefunden wurde, bzw. -1, wenn der Wert nicht gefunden wurde
// Syntax: lastIndexOf(Suchwert[, Startindex])
// nicht destruktiv

console.log(personen.lastIndexOf("Marcel")) // gibt 1 zurück
console.log(personen.lastIndexOf("Dennis", 2))   // gibt -1 zurück