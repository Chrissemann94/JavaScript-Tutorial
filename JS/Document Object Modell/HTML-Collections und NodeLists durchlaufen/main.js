"use strict";

// HTML-Collections

let html_collection_1 = document.getElementsByClassName("jumbotron");
let html_collection_2 = document.getElementsByTagName("li");
console.log(html_collection_2);

// for-Schleife

for (let i = 0; i < html_collection_1.length; i++) {
    console.log(html_collection_1[i]);
}

for (let i = 0; i < html_collection_2.length; i++) {
    console.log(html_collection_2[i]);
}

// for-of-Schleife

for (let e of html_collection_1) {
    console.log(e);
}

for (let e of html_collection_2) {
    console.log(e);
}

// Node-Lists

let node_list = document.querySelectorAll("p");
console.log(node_list);

for (let i = 0; i < node_list.length; i++) {
    console.log(node_list[i]);
}

for (let e of node_list) {
    console.log(e);
}

node_list.forEach(function(e) {
    console.log(e);
});