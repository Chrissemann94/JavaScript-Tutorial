"use strict";

const haushaltsbuch = {

    eintraege: [],
    fehler: [],
    gesamtbilanz: new Map(),
    

    // Eingabedaten holen
    EintragErfassen() {       
            let neuerEintrag = new Map();

            neuerEintrag.set("Titel", this.TitelVerarbeiten(prompt("Titel:", "Miete")));
            neuerEintrag.set("Typ", this.TypVerarbeiten(prompt("Typ (Einnahme oder Ausgabe):", "Einnahme")));
            neuerEintrag.set("Betrag", this.BetragVerarbeiten(prompt("Betrag (in Euro, ohne €-Zeichen):")));
            neuerEintrag.set("Datum", this.DatumVerarbeiten(prompt("Datum:", "jjjj-mm-tt")));
            neuerEintrag.set("timestamp", Date.now());
            if (this.fehler.length === 0)
            {
            this.eintraege.push(neuerEintrag);
            }
            else {
                console.log("Folgende Fehler wurden gefunden: ")
               this.fehler.forEach(function(fehler) {
                console.log(fehler);
               }); 
            }
        },    

     /* Eingabedaten validieren und bearbeiten */

    TitelValidieren(titel) {
        if (titel !== "")     // Regex für beliebige Zahl mit oder ohne zwei Kommastellen
         {
            return true;
         }
        else 
         {
            return false;
         }
    },   
            
  
    TitelVerarbeiten(titel) {
        titel = titel.trim();
        if(this.TitelValidieren(titel)) 
        {
            return titel;
        }
        else {
            this.fehler.push(`Kein Titel angegeben.`);
            return false;
        }       
    },

    TypValidieren(typ) {
        if (typ !== /^(?:einnahme|ausgabe)$/)     // Regex für beliebige Zahl mit oder ohne zwei Kommastellen
         {
            return true;
         }
        else 
         {
            return false;
         }
    },   
            
  
    TypVerarbeiten(typ) {
        typ = typ.trim().toLowerCase();
        if(this.TypValidieren(typ)) 
        {
            return typ;
        }
        else {
            this.fehler.push(`Ungültiger Typ angegeben: ${typ}`);
            return false;
        }       
    },


    BetragValidieren(betrag) {
        if (betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null)     // Regex für beliebige Zahl mit oder ohne zwei Kommastellen
        {
            return true;
        }
        else 
        {
            return false;
        }
    },        
    
    BetragVerarbeiten(betrag) {
        betrag = betrag.trim();
        if(this.BetragValidieren(betrag)) 
        {
            return parseFloat(betrag.replace(",", ".")) * 100;
        }
        else {
            this.fehler.push(`Ungültiger Betrag: ${betrag} €`);
            return false;
        }       
    },

    DatumValidieren(datum) {
        if (datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null)     // Regex für Datum (ausbaufähig)
        {
            return true;
        }
        else 
        {
            return false;
        }
    },        
    
    DatumVerarbeiten(datum) {
        datum = datum.trim();
        if(this.DatumValidieren(datum)) 
        {
            return new Date(`${datum} 00:00:00`);
        }
        else {
            this.fehler.push(`Ungültiges Datum: "${datum}"`);
            return false;
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
                case "einnahme":
                    neueGesamtbilanz.set("Einnahmen", neueGesamtbilanz.get("Einnahmen") + eintrag.get("Betrag"));
                    neueGesamtbilanz.set("Bilanz", neueGesamtbilanz.get("Bilanz") + eintrag.get("Betrag"));
                    break;
                case "ausgabe":
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

    console.log(`Einnahmen: ${(this.gesamtbilanz.get("Einnahmen") / 100).toFixed(2)} €\n`
                + `Ausgaben: ${(this.gesamtbilanz.get("Ausgaben")).toFixed(2)} €\n`
                + `Bilanz: ${(this.gesamtbilanz.get("Bilanz")).toFixed(2)} €\n`
                + `Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`);
    },

    // Eintrag Hinzufügen
    EintragHinzufuegen() {
        let weitererEintrag = true;

        while(weitererEintrag) {
            this.EintragErfassen();
            if(this.fehler.length === 0)
            {            this.EintraegeSortieren();
            this.EintraegeAusgeben();
            this.GesamtbilanzErstellen();
            this.GesamtbilanzAusgeben();
            }
            else
            {
                this.fehler = [];
            }
            weitererEintrag = confirm("Weiteren Eintrag hinzufügen?");
        }
    }
};



/* MAIN */
/*-------*/

haushaltsbuch.EintragHinzufuegen();