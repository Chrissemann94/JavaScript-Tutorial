"use strict";

let vor = "Vor dem prompt...";
console.log(vor);

let name = prompt("Wie ist dein Name?", "Peter Parker");   // Pop-up-Fenster mit Standardwert 
console.log(name);

let nach = "Nach dem prompt...";
console.log(nach);

// Ohne Eingabe --> Leerstring
// Abbruch --> null
// prompts halten den Programmablauf an!

