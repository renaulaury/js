const square = document.createElement('div');
square.classList.add("carre");
const compteur = document.createElement('div');
compteur.classList.add("compteur");

let count = 1;

function addSquares() {
    for(let i = 1; i <= 4; i++) {
        const newSquare = square.cloneNode(true);
        const newCompteur = compteur.cloneNode(true); //Obligé de cloner car sinon 1 seule et unique possibilité d'utilisation
        
        wrapperGroup.appendChild(newSquare);
        newSquare.appendChild(newCompteur); //Attention a bien ajouter au clone
        newCompteur.innerText = count++;
    }
}

function mouvementAuclic() {

}

addSquares();










/*je dois faire une boucle qui copie un nouveau carré
puis lui dire ou le mettre*/
/*je dois créer un compteur et qu'il s'affiche*/
/*faut que je crée une div pour compteur que je met dans la boucle*/
/*fonction pour ecouter clic > retrecissement + rotation + fond*/