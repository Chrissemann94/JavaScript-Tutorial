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

const kontostand_ausgeben = function(konto) {
    console.log(`${konto.inhaber.vorname} ${konto.inhaber.nachname} hat ${konto.kontostand}€ auf dem Konto.`);
};
kontostand_ausgeben(konto_1);
kontostand_ausgeben(konto_2);

// Challenge: Denkt euch noch ein paar hilfreiche Funktionen für unsere Konten aus.