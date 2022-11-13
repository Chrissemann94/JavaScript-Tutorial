"use strict";

const haushaltsbuch = {

    eintraege: [],

    gesamtbilanz: new Map(),
    

    // Eingabedaten holen
    EintragErfassen() {       
            let neuerEintrag = new Map();

            neuerEintrag.set("Titel", prompt("Titel:", "Miete")).trim();
            neuerEintrag.set("Typ", prompt("Typ (Einnahme oder Ausgabe):", "Einnahme")).trim();
            neuerEintrag.set("Betrag", this.BetragVerarbeiten(parseInt(prompt("Betrag (in Euro, ohne €-Zeichen):")))).trim();
            neuerEintrag.set("Datum", new Date(prompt("Datum:", "jjjj-mm-tt"))).trim();
            neuerEintrag.set("timestamp", Date.now());
            this.eintraege.push(neuerEintrag);
            },          
     
    BetragValidieren(betrag) {
        if (betrag.math(/^\d+(?:(?:,|\.)\d\d?)?$/) != null)     // Regex für beliebige Zahl mit oder ohne zwei Kommastellen
        {
            return true;
        }
        else 
        {
            return false
        }
    }        
    
    BetragVerarbeiten(betrag) {
        if(this.BetragValidieren(betrag)) 
        {
            return parseFloat(betrag.replace(",", ".")) * 100;
        }
        else {
            console.log(`Ungültiger Betrag: ${betrag} €`)
        }       
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
                    + `Betrag: ${(eintrag.get("Betrag") / 100).toFixed(2)} €\n`
                    + `Datum: ${eintrag.get("Datum").toLocaleDateString("de-DE", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit" 
                    })}`
                );
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

    console.log(`Einnahmen: ${(this.gesamtbilanz.get("Einnahmen" / 100)).toFixed(2)} €\n`
                + `Ausgaben: ${(this.gesamtbilanz.get("Ausgaben")).toFixed(2)} €\n`
                + `Bilanz: ${(this.gesamtbilanz.get("Bilanz")).toFixed(2)} €\n`
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