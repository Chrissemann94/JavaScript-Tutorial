"use strict";

// Element erstellen
let div = document.createElement("div");

// Attribut erstellen
let attr = document.createAttribute("id");
attr.value = "meine_id";

// Attribute einem Element hinzufügen
div.setAttributeNode(attr);

// Attribute erstellen UND hinzufügen
div.setAttribute("class", "meine_klasse");

let text = document.createTextNode("Lorem ipsum dolor sit amet.");

console.log(text);
console.log(div);