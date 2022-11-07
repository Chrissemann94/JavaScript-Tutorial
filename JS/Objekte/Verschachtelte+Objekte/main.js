"use strict";

// Inhaber-Obejekt (Vornamen, Nachname, Geschlecht, Alter)
/*
let inhaber_1 = {
    vorname: "Max",
    nachname: "Mustermann",
    geschlecht: "männlich",
    alter: 25
};

console.log(inhaber_1);

let inhaber_2 = {
    vorname: "Maria",
    nachname: "Musterfrau",
    geschlecht: "weiblich",
    alter: 18
};

console.log(inhaber_2);
*/
/*
let iban = "DE6206752564419854";
let bic = "WEASE5PXHK";
let kontostand = 3500;
let aktiv = true;
*/

let konto_1 = {
   iban: "DE6206752564419854",
   bic: "WEASE5PXHK",
   inhaber: {
       vorname: "Max",
       nachname: "Mustermann",
       geschlecht: "männlich",
       alter: 25
   },
   kontostand: 3500,
   aktiv: true
};

console.log(konto_1);

let konto_2 = {
    iban: "DE6206752564419706",
    bic: "WEASE5PXHK",
    inhaber: {
        vorname: "Maria",
        nachname: "Musterfrau",
        geschlecht: "weiblich",
        alter: 18
    },
    kontostand: 5500,
    aktiv: true
};

console.log(konto_2);

/*
    Objekt für ein Auto anlegen:

    - Marke
    - Modell
    - Kraftstoffart
    - Kilometerstand
    - Ausstattung
        - Navigationssystem
        - Klimaanlage
        - Sitzheizung
        - Tempomat
        - Panoramadach
    - Zustand
    - Preis

*/

let auto = {
    marke: "Hyundai",
    modell: "i30",
    kraftstoffart: "Benzin",
    kilometerstand: 15650,
    ausstattung: {
        navigationssystem: true,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: true,
        panoramadach: false
    },
    zustand: "gebraucht",
    preis: 15499
};

console.log(auto);