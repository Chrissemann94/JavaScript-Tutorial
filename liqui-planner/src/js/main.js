"use strict";

const haushaltsbuch = {

    eintraege: [],

    gesamtbilanz: {
        einnahmen: 0,
        ausgaben: 0,
        bilanz: 0
    },

    // Eingabedaten holen
    EintragErfassen() {       
        this.eintraege.push(
            {
            titel: prompt("Titel:", "Miete"),
            typ: prompt("Typ (Einnahme oder Ausgabe):", "Einnahme"),
            betrag: parseInt(prompt("Betrag (in Cent):")),
            datum: prompt("Datum:", "jjjj-mm-tt")
            }
        )
    },

    // Eintrag ausgeben
    EintraegeAusgeben() {
            console.clear();
            this.eintraege.forEach(function(eintrag) {
                console.log(`Titel: ${eintrag.titel}\n`
                    + `Typ: ${eintrag.typ}\n`
                    + `Betrag: ${eintrag.betrag} ct\n`
                    + `Datum: ${eintrag.datum}`);
            });
    },

    // // Eintrag mit Bilanz verrechnen
    GesamtbilanzErstellen() {
        let neueGesamtbilanz = {
            einnahmen: 0,
            ausgaben: 0,
            bilanz: 0
        };

        this.eintraege.forEach(function(eintrag) {
            switch(eintrag.typ) {
                case "Einnahme":
                    neueGesamtbilanz.einnahmen += eintrag.betrag;
                    neueGesamtbilanz.bilanz += eintrag.betrag;
                    break;
                case "Ausgabe":
                    neueGesamtbilanz.ausgaben += eintrag.betrag;
                    neueGesamtbilanz.bilanz -= eintrag.betrag;
                    break;
                default:
                    console.log(`Der Typ ${eintrag.typ} ist nicht bekannt.`);
                    break;
            }
        });

        this.gesamtbilanz = neueGesamtbilanz;       
    },

    // // Gesamtbilanz ausgeben
    GesamtbilanzAusgeben() {

    console.log(`Einnahmen: ${this.gesamtbilanz.einnahmen} ct\n`
                + `Ausgaben: ${this.gesamtbilanz.ausgaben} ct\n`
                + `Bilanz: ${this.gesamtbilanz.bilanz} ct\n`
                + `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`);
    },

    // Eintrag Hinzufügen
    EintragHinzufuegen() {
        let weitererEintrag = true;

        while(weitererEintrag) {
            this.EintragErfassen();
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