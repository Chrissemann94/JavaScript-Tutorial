"use strict";

let mein_objekt = {
    name: "Mustermann",
    vorname: "Max",
    alter: 26
};

// So bitte nicht!
// for (let e in mein_objekt) {
//     console.log(mein_objekt[e]);
// }

for (let paar of Object.entries(mein_objekt)) {
    console.log(paar);
    for (let e of paar) {
        console.log(e);
    }
}

for (let e of Object.keys(mein_objekt)) {
    console.log(e);
}

for (let w of Object.values(mein_objekt)) {
    console.log(w);
}