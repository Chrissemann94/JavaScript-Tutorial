"use strict";

let nav = document.querySelector("#navigation");
nav.remove();

let jumbo = document.querySelectorAll(".jumbotron");
console.log(jumbo);
//jumbo.remove();

jumbo.forEach(function(e) {
    e.remove();
});