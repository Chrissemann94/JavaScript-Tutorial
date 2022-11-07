"use strict";

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

// Werte auslesen (Bracket-Notation)

let wert_1 = konto_1["iban"];
console.log(wert_1);

let wert_2 = konto_1["inhaber"]["geschlecht"];
console.log(wert_2);

// Eigenschaften setzen (Bracket-Notation)

konto_2["abhebelimit"] = 1000;
console.log(konto_2["abhebelimit"]);

// Werte setzen bzw. verändern (Bracket-Notation)

konto_1["kontostand"] = 3000;
console.log(konto_1["kontostand"]);

// Warum sollten wir die Bracket-Notation jemals verwenden?

let eigenschaft = "iban";
let wert_3 = konto_1[eigenschaft];
console.log(wert_3);

/*
    - schnappt euch Auto-Objekt aus letzter Lektion
    - fügt Eigenschaft PS hinzu
    - verändert das Modell des Autos
    - gebt Template-String "Ein ... ... hat ...PS." aus 
    (einer der Werte soll über einen String in einer Variablen ausgelesen werden)
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

auto["ps"] = 101;
auto["modell"] = "i20";

let eig = "ps";

console.log(`Ein ${auto["marke"]} ${auto["modell"]} hat ${auto[eig]}PS.`);