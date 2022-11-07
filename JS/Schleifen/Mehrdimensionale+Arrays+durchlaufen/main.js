"use strict";

let waren = [
    [
        "Äpfel", 
        "Birnen", 
        "Bananen"
    ],
    [
        "Möhren", 
        "Sellerie", 
        "Kohl"
    ],
    [
        "Graubrot", 
        "Schwarzbrot", 
        "Vollkornbrot"
    ]
];

for (let i = 0; i < waren.length; i++) {

    for (let j = 0; j < waren[i].length; j++) {
        console.log(waren[i][j]);
    }
    
}