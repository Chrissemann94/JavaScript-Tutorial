"use strict";

/* const meine_funktion = function(parameter_1, parameter_2) {
    auszuführender Code
};

meine_funktion(p_1, p_2);
*/

const log_die_zahl = function(a) {
    console.log(a);
};

log_die_zahl(42);


const begruessung = function(vorname, nachname) {
    console.log(`Hallo ${vorname} ${nachname}!`);
};

let vor = "Max";
let nach = "Mustermann";

begruessung(vor, nach);


const grundrechnungen = function(z1, z2) {
    console.log(z1 + z2);
    console.log(z1 - z2);
    console.log(z1 * z2);
    console.log(z1 / z2);
    console.log(z1 % z2);
};

let a = 23;
let b = 54;
let c = 99;
let d = 77;
let e = 5;

grundrechnungen(a, e);
grundrechnungen(d, b);
grundrechnungen(b, c);
grundrechnungen(e, b);
grundrechnungen(e, e);