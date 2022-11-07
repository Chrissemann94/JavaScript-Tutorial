"use strict";

let meineMap = new Map();


meineMap.set("Test", "Wert zur Eigenschaft Test");
meineMap.set(13, "Wert zur Eigenschaft 13");
meineMap.set([], "Wert zur Eigenschaft []");
meineMap.set(function() {}, "Wert zur Eigenschaft Funktion");
meineMap.set({}, "Wert zur Eigenschaft {}");
console.log(meineMap);


console.log(meineMap.get("Test"));
console.log(meineMap.get(13));
console.log(meineMap.get([]));              // gibt undefined zurück wegen Referenztyp
console.log(meineMap.get(function() {}));   // gibt undefined zurück wegen Referenztyp
console.log(meineMap.get({}));              // gibt undefined zurück wegen Referenztyp

console.log(meineMap.has(13));              // gibt einen Boolean zurück
console.log(meineMap.has({}));              // gibt false zurück wegen Referenztyp


meineMap.delete("Test");                    // löscht Element mit Eigenschaft Test
console.log(meineMap);

console.log(meineMap.size);                 // gibt die Größe der Map zurück


meineMap.clear();                           // löscht alle Eigenschaften der Map
console.log(meineMap);


