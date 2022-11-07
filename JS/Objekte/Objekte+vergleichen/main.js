"use strict";

let auto_1 = {
    marke: "BMW",
    modell: "i8"
};

let auto_2 = {
    marke: "Tesla",
    modell: "Model X"
};

let auto_3 = {
    marke: "Tesla",
    modell: "Model X"
};

console.log(auto_1 == auto_2);
console.log(auto_2 == auto_3);
console.log(auto_3 == auto_3);
console.log({} == {});

// Challenge: Schreibe eine Funktion, die zwei Auto-Objekte mit den Eigenschaften "marke" und "modell" 
// übergeben bekommt und prüft, ob die Objekte gleich sind.

const autos_vergleichen = function(o1, o2) {
    if (o1.marke == o2.marke && o1.modell == o2.modell) {
        return true;
    } else {
        return false;
    }
};

console.log(autos_vergleichen(auto_1, auto_3));