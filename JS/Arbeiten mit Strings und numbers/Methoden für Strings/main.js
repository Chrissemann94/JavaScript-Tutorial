"use strict";

let s = " Lorem ipsum dolor sit amet ipsum.    ";

console.log(s.length);                      // Gibt Länge des Strings aus
console.log(s.indexOf("ipsum", 20));        // Erstes Vorkommen eines Suchstrings, Startwert
console.log(s.lastIndexOf("ipsum", 10));    // Letztes Vorkommen eines Suchstrings, Startwert von hinten
console.log(s.includes("sit", 28));         // Gibt Boolean aus, Startwert
console.log(s.toLowerCase());               // Gibt string in LowerCase aus
console.log(s.toUpperCase());               // Gibt string in UpperCase aus
console.log(s.trim());                      // Entfernt überflüssige Leerzeichen, bspw. für Benutzernamen in Datenbank
console.log(s.repeat(100));                 // Wiederholt den String um eine bestimmte Anzahl

let regex = /i\w{4}/g;

console.log(s.search(regex));               // Sucht einen String und gibt index aus
console.log(s.replace(regex, "opsum"));     // Ändert String mit Zutreffender RegEx um
console.log(s.match(regex));                // Sucht Strings, die einer RegEx entsprechen


/* Regular Expressions      --> wird bspw. für die Regelung von Passwörtern bzw. eMails genutzt

syntaktische Regeln für Zeichenketten

/i      --> Anfang einer RegEx
\w      --> Word Characters --> Buchstaben des Alphabets
{5}    --> Anzahl der Buchstaben
/g      --> Schluss einer RegEx, steht für global

*/