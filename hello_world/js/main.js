console.log("Hello JS");

let age = 37;
// if (age >= ageMin) {

// }
// while (k<10) {
// }

// let animal = "dog";
// animal = cat;

// const deux = 2;
// let quantite = 3;
// const prix = 1.15;

// let isAdult = true;
// let isTaskDone = false;
// const hasBeenToTokyo = true;

let nb = 2;
if (nb % 2) {
    console.log("Nombre impair");
} else {
        console.log("Nb pair");
    }

let nb1 = 1;

nb1 += 2;
nb1 -= 2; 
//nb1 = 1;

const prenom = "Lily";
const nom = "Redbird";
const nomComplet = prenom + " " + nom;
console.log("My name is " + nomComplet);
console.log(`Je m'appelle ${nomComplet}`);

console.log("1 : " + (2 == "2"));
console.log("2 : " + (2 === "2"));
console.log("3 : " + (2 != "2"));
console.log("4 : " + (2 !== "2"));

console.log("true && true" + (2 > 1 && 3 <= 3));
console.log("true && false" + (2 > 1 && 3 < 3));
console.log("true || false" + (2 > 1 || 3 < 3));
console.log("false || false" + (2 <= 1 || 3 < 3));

console.log("!true = " + !(2 > 1));
console.log("!false = " + !(2 <= 1));

//Ternaire
const ageJohn = 20;
console.log("John est " + (ageJohn >= 21 ? "Majeur" : "Mineur") + " en France");
console.log(`John est ${ageJohn >= 21 ? "Majeur" : "Mineur"} aux US`);


let nb2 = 10;
if (nb2 >= 100) {
    console.log("Vous etes centenaire");
} else if (age >= 80) {
    console.log("Vous etes au moins octogénaire");
} else if (age >= 60) {
    console.log("Vous etes au moins sexagénaire");
} else {
    console.log("Vous etes jeune !");
}

let action = "virement";

switch (action) {
    case "retrait":
        //debit -
        break;
    case "virement":
        // debit - + credit +
        break;
    default:
        //error transaction
        break;
}

let numberToGuess = 7;
let operation = "fois2plus3";

switch (operation) {
    case "plus1":
        numberToguess++;
        break;
    
    case "fois2plus3":
    break;
}


for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
}

let nb3 = 12;
while (nb3 < 18) {
    console.log("Jai " + nb3 + " ans");
    nb3++;
}

console.log("En fait, j'ai " + nb3 + "ans");

function nomFonction(arg1, arg2, arg3) {
    const result = arg1 * arg2 + arg3;
    return result;
}

const valeur = nomFonction(1, 2, 3);

console.log(valeur);

function nb3fois(nombre) {
    return nombre * 3;
}

const cinqFois3 = nb3fois(5);
console.log(cinqFois3);

let phrase = "Je serai une bonne dév";
function pointDexcla(phrase) {
    console.log(phrase + " !");
}

pointDexcla(phrase);



function addition(nb1, nb2) {
    return nb1 + nb2;
}

function soustraction(nb1, nb2) {
    return nb1 - nb2;
}

function multiplication(nb1, nb2) {
    return nb1 * nb2;
}

function calcul(nb1, operation, nb2) {
    switch (operation) {
        case "addition":
            return addition(nb1, nb2);
        case "soustraction":
            return soustraction(nb1, nb2);
        case "multiplication":
            return multiplication(nb1, nb2);
        default :
        console.log("Operation de "+ operation + " non gérée");
        return null;
}
}

console.log("7 + 2 = " + calcul(7, 'addition', 2));




const tableauVide = [];
const tabl = [11, 22, 33, 44, 55, 66, 77];

tableauVide.push(2);
tableauVide.push(4);

console.log("tableauVide = ", tableauVide);

console.log("tableauVide[1]", tableauVide[1]);

tableauVide[2] = "abc";
console.log("tableauVide = ", tableauVide);


console.log(tableauVide.join(" - "));

 
console.log(tableauVide);
console.log("---");
console.log(tableauVide.includes(4));
console.log(tableauVide.indexOf(4));

/*tabl associatif*/

let tablAssocVide = {};
tablAssocVide.prenom = "Bryan";
tablAssocVide.age = 24;

console.log("tablAssocVide = ", tablAssocVide);

console.log("---");

let pika = {
    id: 25,
    name: "Pika",
    weightKg: 6.0,
    hpMax: 80,
    attacks: [{
        name: "Vive-Attack",
        damages: 10,
    },
    {
        name: "Testicules-Elec",
        damages: 20,
    },
    ],
};


console.log("pikapika = ", pika);

function afficherAttacks(pokemon) {
    console.log(pokemon.name + " possède " + pokemon.attacks.length + " attaques :");

    for (let i = 0; i < pokemon.attacks.length; i++) {
        const attaque = pokemon.attacks[i];
        console.log(attaque.name + " (puissance "+ attaque.damages + ")");
    }
}

afficherAttacks(pika);