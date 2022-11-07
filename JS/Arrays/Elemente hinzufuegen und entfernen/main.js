"use strict";

let personen = [
    "Sebastian",
    "Marcel",
    "Anna",
    "Dennis",
    "Mia"
];

personen[1] = "Pia"; // ändert Wert mit Index 1

// push(): Fügt ein Element am Ende des Arrays hinzu (und gibt die neue Größe des Arrays zurück)
// destruktiv

console.log(personen.push("Max")); // fügt Max hinzu


// pop(): Entfernt das letze Element aus dem Array (und gibt es zurück)
// destruktiv
personen.pop();
console.log(personen);


// unshift(): Fügt ein Element am ANFANG des Arrays hinzu (und gibt die neue Größe des Arrays zurück)
// destruktiv

console.log(personen.unshift("Max")); // fügt Max AM ANFANG hinzu



// shift(): Entfernt das ERSTE Element aus dem Array (und gibt es zurück)
// destruktiv

console.log(personen.shift());





