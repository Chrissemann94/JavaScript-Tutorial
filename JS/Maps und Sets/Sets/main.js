"use strict";

// Sets können keinen Wert doppelt besitzen, verglichen wird strikt (===)

let meinSet = new Set();

meinSet.add("Test");
meinSet.add("Test");        // doppeltes Element wird nicht beachtet
meinSet.add(13);
meinSet.add([]);
meinSet.add(function() {});
meinSet.add({});
meinSet.add({});            // Zweite Objekt wird beachtet wegen Referenztyp

console.log(meinSet);


console.log(meinSet.has("Test"));        // Gibt Boolean zurück
console.log(meinSet.has("Beispiel"));   // Nicht vorhanden --> false
console.log(meinSet.has({}));           // Gibt false zurück wegen Referenztyp
console.log(meinSet.has(6 + 7))         // ergibt 13 --> true

meinSet.delete("Test");                 // Löscht den Wert "Test"

console.log(meinSet.size);              // Gibt Größe zurück

meinSet.clear();
console.log(meinSet);