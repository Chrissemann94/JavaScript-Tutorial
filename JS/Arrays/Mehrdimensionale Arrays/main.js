"use strict";


let waren = [       // Mehrdimensionales Array
    [
        "Äpfel", 
        "Birnen", 
        "Bananen"
    ],
    [
        "Karotten", 
        "Sellerie", 
        "Kohl"
    ],
    [
        "Graubrot", 
        "Schwarzbrot", 
        "Vollkornbrot"
]
];

console.log(waren);

console.log(waren[1][1]);   // Gibt Sellerie aus
console.log(waren[0][2]);   // Gibt Bananen aus
console.log(waren[2][0]);   // Gibt Graubrot aus