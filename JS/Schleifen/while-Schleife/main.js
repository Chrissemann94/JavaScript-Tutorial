"use strict";
/*
while (Bedingung) {
    ...
}
*/

let x = 0; // <-- Zählvariable

while (x < 5) {
    //x++;
    console.log(`While: ${x}`);
    x++;
}

// x = 1
// x = 2
// x = 3
// x = 4
// x = 5

// Vorsicht vor Endlosschleifen!
/*
let y = 0;

while (y >= 0) {
    console.log("TEST!");
    y++;
}
*/

let z = 0;

while (z < 10) {
    z++;
    if (z == 5) {
        continue;
    } else if (z == 7) {
        break;
    }
    console.log(z);
}

console.log("Schleife beendet!");