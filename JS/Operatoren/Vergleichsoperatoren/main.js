"use strict";

console.log(42 == 42);       // Überprüfung auf Gleichheit, true
console.log(42 == 43);       // Überprüfung auf Gleichheit, false

console.log(42 != 42);      // Überprüfung auf Ungleichheit, false
console.log(42 != 43);      // Überprüfung auf Ungleichheit, true

console.log(43 > 42)        // größer als
console.log(42 < 43)        // kleiner als

console.log(42 >= 42);      // größer-gleich
console.log(42 <= 42);      // kleiner-gleich



// für Strings ASCII-Tabelle beachten

console.log("K" == "k");
console.log("K" > "k");
console.log("K" < "k");

console.log("Christoph" == "Christoph");
console.log("Christoph" == "CHRISTOPH");

console.log("Christoph" != "Christoph");
console.log("Christoph" != "CHRISTOPH");

console.log("Christoph" < "Christoph");
console.log("Christoph" < "CHRISTOPH");     // false

console.log("Christoph" > "Christoph");
console.log("Christoph" > "CHRISTOPH");     // true

console.log("Christoph" <= "Christoph");
console.log("Christoph" <= "CHRISTOPH");

console.log("Christoph" >= "Christoph");
console.log("Christoph" >= "CHRISTOPH");

// ACHTUNG: Länge von Strings werden so NICHT verglichen
console.log("Peter" < "Annabella");         // false


// STRIKTE GLEICHHEIT
console.log("42" === 42);       // false

// STRIKTE UNGLEICHHEIT
console.log("42" !== 42);       // true