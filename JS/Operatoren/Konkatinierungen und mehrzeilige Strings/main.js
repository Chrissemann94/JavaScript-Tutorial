"use strict";

let vorname = "Christoph";
let nachname = "Vas";
let alter = 28;

let name = vorname + " " + nachname; // Konkatinierung von vorname und nachname
console.log(name);

let begruessung = "Hallo " + name + "!";
console.log(begruessung);

let zusammenfassung = name + " (" + alter + " Jahre)";
console.log(zusammenfassung);


// Mehrzeiliger String

let einzeiliger_String = "Dies ist ein einzeiliger String";

let mehrzeiliger_string = "Ich will diesen String " +
"in der nächsten Zeile fortsetzen " +
"\n\tund wenn ich will " +                
"kann es auch noch weiter gehen";

// \n --> new Line
// \t --> Tabulator