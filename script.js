"use strict"

// Funkcija tai kodo eilute, apibrezimas, kuri galima panaudoti kelis kartus

// sudeti du skaicius
let suma, sk1, sk2;
sk1 = 2;
sk2 = 3;
suma = sk1 + sk2;
//console.log(suma);

// sudeti du skaicius iterpus funkcija

function sumuoti(a = 0,b = 0) { // apibrezta funkcija  // a,b apibreziami kintamieji, kurie yra perduodami
    let masyvas;
    masyvas = [a, b]
    let suma; // joje ir yra ir vyksta, nors ir kitur yra let suma
    // suma = masyvas[0] + masyvas [1], galima ir taip rasyti, rezultatas toks pats
    suma = a + b;
    return suma;       // grazina bet koki kintamojo tipa
}

function atimtis(a = 0,b = 0) { 
    let masyvas;
    masyvas = [a, b]
    let likutis; 
    if (sk1 > sk2) { // padaroma salyga, kad butu is didesnio atimamas mazesnis skaicius
         likutis = a - b;
    } else if (sk2 > sk1) {
        likutis = b - a;
    } else {
        likutis = 0;
    }
   // funkcijose galima naudoti if ir ciklus
    return likutis;       
}

let tekstas; // funkcijos iskvietimas
tekstas = sumuoti(18, 21); // i funkcija galim perduoti bet kokio tipo kintamaji
console.log(tekstas);

let tekstas1; // funkcijos iskvietimas
tekstas1 = atimtis(sk1 - sk2);
console.log(tekstas1);


//console.log(sumuoti());


function beGrazinimo() {
    console.log("Funkcija negrazina nieko");
} // funkcija be return, kuri nieko negrazina, o bando tik atvaizduoti

beGrazinimo(); // funkcijos iskvietimas

let tekstas2; // jis niekam nepriskiriamas, nes funkcija negrazina jokios reiksmes
tekstas2 = beGrazinimo(); // atlieka tik atvaizdavima, be kintamuju perdavimo
console.log(tekstas2); // undefined

function beGrazinimo1(tekstas) {
    console.log("Rezultatas:" + tekstas);
}

// let tekstas3;
// tekstas3 = beGrazinimo1();


// kitoks conosle.log
beGrazinimo1(suma);
beGrazinimo1(sumuoti());
beGrazinimo1(tekstas1);



// Isvesti n-zenklio skaiciaus visus skaitmenis atksirai ir surasti ju suma. 
// Kiekviena skaitmeni surasome i masyva
// Perdaryti sia uzduoti i funkcija


function skaiciausAtpazinimas(skaicius) {
    let suma1 = 0;
    let skaitmuo = 0;
    let indeksas = 0;
    let skaMasyvas = [];

    while (skaicius !=0) {
       
        skaitmuo = skaicius % 10;
        skaMasyvas[indeksas] = skaitmuo;
    
        skaicius = parseInt(skaicius / 10);
        suma1 = suma1 + skaitmuo;
    
        indeksas++;
        
    
    }

    // po ciklo skaMasyvas paskutinio indeksas yra 5, 
    skaMasyvas[skaMasyvas.length] = suma1;

    return skaMasyvas; // kiekviena skaiciu atskirai ir suma

    // grazina masyva kuriame pirmi elementai yra skaitmenys, o paskutinis elementas suma
}

let skaicius;
skaicius = 102030;
let rezultatas = skaiciausAtpazinimas(skaicius);
console.log("Suma: " + rezultatas[rezultatas.length - 1]);

// Kiekviena skaitmeni atskirai

for (let i=0; i < rezultatas.length - 1; i++) {
    console.log(rezultatas[i]);
}

console.log(skaiciausAtpazinimas(skaicius));
//console.log ("suma " + suma1);
