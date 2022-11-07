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

// Werte auslesen (Dot-Notation)

let wert_1 = konto_1.iban;
console.log(wert_1);

let wert_2 = konto_2.bic;
console.log(wert_2);

let wert_3 = konto_1.inhaber.vorname;
console.log(wert_3);

console.log(`${konto_1.inhaber.vorname} ${konto_1.inhaber.nachname} hat ${konto_1.kontostand}€ auf seinem Konto.`);

// Eigenschaften setzen (Dot-Notation)

konto_1.abhebelimit = 1000;
console.log(konto_1);
console.log(konto_1.abhebelimit);

// Werte setzen bzw. verändern (Dot-Notation)

konto_1.kontostand = 3000;
console.log(konto_1);

/*
    - schnappt euch Auto-Objekt aus letzter Lektion
    - fügt Eigenschaft PS hinzu
    - verändert das Modell des Autos
    - gebt Template-String "Ein ... ... hat ...PS." aus
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

auto.ps = 101;
auto.modell = "i20";
console.log(`Ein ${auto.marke} ${auto.modell} hat ${auto.ps}PS.`);