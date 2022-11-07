"use strict";

/*let zahlen = [1, 20, 2000, 1000000, 50];
let neuSortiert = zahlen.sort();    
console.log(neuSortiert);*/

let worte = ["Zahl", "Wahnsinn", "Mangel", "Abspann"]
let worteNeu = worte.sort();                    // nach Standard wird nach UTF-16-Code sortiert
console.log(worteNeu);

let zahlen = [1, 20, 2000, 1000000, 50];
let zahlenNeu = zahlen.sort(function(a,b){      // Sortiert von kleinster nach größter Zahl
    return a - b;
});
console.log(zahlenNeu)

let zahlenB = [1, 20, 2000, 1000000, 50];
let zahlenNeuB = zahlen.sort(function(a,b){      // Sortiert von größter nach kleinster Zahl
    return b - a;
});
console.log(zahlenNeuB);

// Für das sortieren von Zahlen-Arrays sollte eine Vergleichsfunkiton genutzt werden.
// Ist der Rückgabewert der FUnktion < 0, wird a auf einen niedrigeren Index als b gesetzt
// Ist der Rückgabewert der FUnktion < 0, wird a auf einen höheren Index als b gesetzt
// Ist der RÜckgabewert der Funktion = 0, bleibt alles wie es ist.
// return a-b sortiert in aufsteigender Reihenfolge
// return b - a sortiert in absteigender Reihenfolge