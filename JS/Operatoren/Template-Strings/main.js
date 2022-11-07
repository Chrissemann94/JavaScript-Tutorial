"use strict";

let vorname = "Christoph";
let nachname = "Vas";
let alter = 28;

let name = vorname + " " + nachname;
console.log(name);

// Template-Strings

let begruessung = `Hallo ${name}!`;
console.log(begruessung);

zusammenfassung = `${vorname} ${nachname} (${alter} Jahre)`;
console.log(begruessung);


// Mehrzeilige Template-Strings

let mehrzeiliger_template_string = `Hallo ${name}!
Du bist ${alter} Jahre alt.
Wie geht es dir?`;
console.log(mehrzeiliger_template_string);      // Bei Template-Strings kein \n notwendig

let einzeiliger_template_string = `Hallo ${name}! ` +
`Du bist ${alter} Jahre alt.` +
`Wie geht es dir?`;          // einzeilig
console.log(einzeiliger_template_string);

