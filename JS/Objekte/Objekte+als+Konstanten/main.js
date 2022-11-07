"use strict";

const person = {
    vorname: "Max",
    nachnamen: "Mustermann",
    alter: 18
};

person.vorname = "Peter";
person.haarfarbe = "braun";
delete person.haarfarbe;

//person = "Eine Person!";
//person = {};

console.log(person);