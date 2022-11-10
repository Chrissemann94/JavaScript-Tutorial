"use strict";

let minimum = 0;
let maximum = 255;

const zufallszahl = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(zufallszahl(minimum, maximum));