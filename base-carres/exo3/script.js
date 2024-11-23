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

        mouvementAuclic(newSquare); //A l'intérieur pour que la fonction soit prise en compte pour chaque carré !!
        
        // mouvementNormal(newSquare);
    }    
    }

function mouvementAuclic(newSquare) { /*pour la portée de la variable, la passer en argument*/
        newSquare.addEventListener("click", function(){

        if(!newSquare.classList.contains('active')){ //Action au premier clic
            newSquare.style.backgroundColor = "red";
            newSquare.style.transform = "scale(0.9) rotate(360deg)";       
            newSquare.style.transition = "transform 0.5s ease, background-color 0.5s ease";
            newSquare.classList.add('active');
        } else { //Action au 2e clic
            newSquare.classList.remove('active');
            newSquare.style.backgroundColor = ""; 
            // newSquare.style.transform = ""; 
        }
    });   
}


addSquares();











/*je dois faire une boucle qui copie un nouveau carré
puis lui dire ou le mettre*/
/*je dois créer un compteur et qu'il s'affiche*/
/*faut que je crée une div pour compteur que je met dans la boucle*/
/*fonction pour ecouter clic > retrecissement + rotation + fond*/
/*fonction pour mettre l'annulation du css au clic*/