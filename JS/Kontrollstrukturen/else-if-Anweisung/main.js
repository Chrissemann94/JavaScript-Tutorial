"use strict";
/*
if (Bedingung1) {
    Code der ausgeführt wird, wenn die Bedingung1 erfüllt (true) ist
} else {

    if (Bedingung2) {
        Code der ausgeführt wird, wenn die Bedingung2 erfüllt (true) ist
    } else {
        
        if (Bedingung3) {
            Code der ausgeführt wird, wenn die Bedingung3 erfüllt (true) ist
        } else {
            Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
        }

    }

}

if (Bedingung1) {
    Code der ausgeführt wird, wenn die Bedingung1 erfüllt (true) ist
} else if (Bedingung2) {
    Code der ausgeführt wird, wenn die Bedingung2 erfüllt (true) ist
} else if (Bedingung3) {
    Code der ausgeführt wird, wenn die Bedingung3 erfüllt (true) ist
} else {
    Code der ausgeführt wird, wenn die Bedingung nicht erfüllt (false) ist
}
*/


const mindestalter = 18;
let benutzer_eingabe = 17;

if (benutzer_eingabe == mindestalter) {
    console.log("Du bist grade alt genug!");
} else if (benutzer_eingabe > mindestalter) {
    console.log("Du bist alt genug!");
} else {
    console.log("Du bist noch nicht alt genug!");
}

