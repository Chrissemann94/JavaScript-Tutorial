"use strict";

let autos = [
    {
        marke: "Hyundai",
        modell: "i30 N",
        farbe: "rot"
    },
    {
        marke: "Ford",
        modell: "Fiesta ST",
        farbe: "schwarz"
    },
    {
        marke: "VW",
        modell: "Golf GTI",
        farbe: "blau"
    }
];

console.log(autos[0].modell)        // gibt i30 N aus
console.log(autos[1]["farbe"])     // gibt schwarz aus