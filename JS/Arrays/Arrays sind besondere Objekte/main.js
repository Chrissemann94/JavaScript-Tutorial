"use strict";

let produkteArray = [
    "Bananen",
    "Äpfel",
    "Schokolade",
    "Brot",
    "Müsli"
];

console.log(produkteArray);

let produkte_Objekt = {
    0: "Bananen",
    1: "Äpfel",
    2: "Schokolade",
    3: "Brot",
    4: "Müsli"
};

// Objekt und Array sind sich in der Ausgabe ähnlich, Arrays besitzen jedoch eine length und viele hilfreiche Funktionen


console.log(produkteArray.length); // Gibt die Länge eines Arrays aus.
console.log(produkteArray[produkteArray.length - 1]); //Greift auf das letzte Element des Arrays zu