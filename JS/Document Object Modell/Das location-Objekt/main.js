"use strict";

console.log(location);
console.log(location.href);
location.href = "https://www.google.de";
console.log(location.protocol);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.search);
console.log(location.hash);

location.reload();
location.assign("https://www.google.de");
location.replace("https://www.google.de");