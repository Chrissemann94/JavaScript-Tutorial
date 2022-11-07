"use strict";

const haushaltsbuch = {

    eintraege: [],

    gesamtbilanz: new Map(),
    

    // Eingabedaten holen
    EintragErfassen() {       
            let neuerEintrag = new Map();

            neuerEintrag.set("Titel", prompt("Titel:", "Miete"));
            neuerEintrag.set("Typ", prompt("Typ (Einnahme oder Ausgabe):", "Einnahme"));
            neuerEintrag.set("Betrag", parseInt(prompt("Betrag (in Cent):")));
            neuerEintrag.set("Datum", prompt("Datum:", "jjjj-mm-tt"));
            this.eintraege.push(neuerEintrag);
            },

    // Einträge sortieren
    EintraegeSortieren() {
        this.eintraege.sort(function(eintrag_a, eintrag_b){
            if (eintrag_a.get("Datum") > eintrag_b.get("Datum")) {
                return -1;
            }
            else if (eintrag_a.get("Datum") < eintrag_b.get("Datum")) {
                return 1;
            }
            else {
                return 0;
            }
        });
    },

    // Eintrag ausgeben
    EintraegeAusgeben() {
            console.clear();
            this.eintraege.forEach(function(eintrag) {
                console.log(`Titel: ${eintrag.get("Titel")}\n`
                    + `Typ: ${eintrag.get("Typ")}\n`
                    + `Betrag: ${eintrag.get("Betrag")} ct\n`
                    + `Datum: ${eintrag.get("Datum")}`);
            });
    },

    // // Eintrag mit Bilanz verrechnen
    GesamtbilanzErstellen() {
        let neueGesamtbilanz = new Map();
        neueGesamtbilanz.set("Einnahmen", 0);
        neueGesamtbilanz.set("Ausgaben", 0);
        neueGesamtbilanz.set("Bilanz", 0);

        this.eintraege.forEach(function(eintrag) {
            switch(eintrag.get("Typ")) {
                case "Einnahme":
                    neueGesamtbilanz.set("Einnahmen", neueGesamtbilanz.get("Einnahmen") + eintrag.get("Betrag"));
                    neueGesamtbilanz.set("Bilanz", neueGesamtbilanz.get("Bilanz") + eintrag.get("Betrag"));
                    break;
                case "Ausgabe":
                    neueGesamtbilanz.set("Ausgaben", neueGesamtbilanz.get("Ausgaben") + eintrag.get("Betrag"));
                    neueGesamtbilanz.set("Bilanz", neueGesamtbilanz.get("Bilanz") - eintrag.get("Betrag"));
                    break;
                default:
                    console.log(`Der Typ ${eintrag.get("Typ")} ist nicht bekannt.`);
                    break;
            }
        });

        this.gesamtbilanz = neueGesamtbilanz;       
    },

    // // Gesamtbilanz ausgeben
    GesamtbilanzAusgeben() {

    console.log(`Einnahmen: ${this.gesamtbilanz.get("Einnahmen")} ct\n`
                + `Ausgaben: ${this.gesamtbilanz.get("Ausgaben")} ct\n`
                + `Bilanz: ${this.gesamtbilanz.get("Bilanz")} ct\n`
                + `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`);
    },

    // Eintrag Hinzufügen
    EintragHinzufuegen() {
        let weitererEintrag = true;

        while(weitererEintrag) {
            this.EintragErfassen();
            this.EintraegeSortieren();
            this.EintraegeAusgeben();
            this.GesamtbilanzErstellen();
            this.GesamtbilanzAusgeben();

            weitererEintrag = confirm("Weiteren Eintrag hinzufügen?");
        }
    }
};



/* MAIN */
/*-------*/

haushaltsbuch.EintragHinzufuegen();