"use strict";

// Normale Funktion:
// const multiplizieren = function(a, b) {return a * b; };
// const multiplizieren = (a, b) => {return a * b; };

// Regel 1: function-keyowrd wird durch => nach Parametern ersetzt
// Regel 2: wenn die Logik der Funktion aus nur einem Ausdruck besteht, kann man die {} weglassen
// Regel:3 wenn es sich sogar nur um eine return-Anweisung handelt, kann auch das return weggelassen werden.

const multiplizieren = (a, b) => a * b; // auf return muss verzichtet werden
console.log(multiplizieren (5, 10));

// const begruessung = function(name) {return `Hallo ${name}`; };

// Regel 4: wenn nur ein Parameter übergeben wird, können die () weggelassen werden. 
const begruessung = name => `Hallo ${name}`; // Parameterklammern können bei nur einem Parameter weggelassen werden
console.log(begruesssung);


// const sinnDesLebens = function() {return 42; };

// Regel 5: wenn keine Parameter übergeben werden, müssen leere () gesetzt werden. 
const sinnDesLebens = () => 42;     // ohne Parameter müssen Klammern wieder genutzt werden
console.log(sinnDesLebens);


// Praxisbeispiel: Pfeil-Funktionen bei Call-Back-Funktionen
let einkaufsliste = [
    "Brot",
    "Käse",
    "Tomaten",
    "Butter",
    "Eier",
    "Orangensaft"
];

// einkaufsliste.forEach(function(e){
//     console.log(e);
// });
einkaufsliste.forEach(e => console.log(e));     // forEach mit FatArrow-Notation 

