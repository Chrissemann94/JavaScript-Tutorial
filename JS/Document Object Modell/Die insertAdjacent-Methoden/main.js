"use strict";

let li = document.createElement("li");
li.setAttribute("id", "mein-listenelement");

let a = document.createElement("a");
a.setAttribute("id", "mein-ankerelement");
a.setAttribute("href", "#");

let text_node = document.createTextNode("Element");

a.appendChild(text_node);
li.appendChild(a);

let liste = document.querySelector("#navigation > ul");

// liste.insertAdjacentElement("beforebegin", li);
// liste.insertAdjacentElement("afterbegin", li);
// liste.insertAdjacentElement("beforeend", li);
// liste.insertAdjacentElement("afterend", li);

let dom_string = "<li id=\"mein-listenelement\"><a id=\"mein-ankerelement\" href=\"#\">Element</a></li>";

// liste.insertAdjacentHTML("beforebegin", dom_string);
// liste.insertAdjacentHTML("afterbegin", dom_string);
// liste.insertAdjacentHTML("beforeend", dom_string);
// liste.insertAdjacentHTML("afterend", dom_string);

let text = "Lorem ipsum dolor sit amet.";

// liste.insertAdjacentText("beforebegin", text);
// liste.insertAdjacentText("afterbegin", text);
// liste.insertAdjacentText("beforeend", text);
liste.insertAdjacentText("afterend", text);

