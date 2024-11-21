const square = document.createElement('div'); //Crée une div
square.classList.add("carre"); //Ajoute une class a la div

const squareLead = document.createElement('div');
squareLead.classList.add("squareLead");


function addSquares() {   
   for(let i = 1; i <= 4; i++) {    
    const newSquare = square.cloneNode(); //Clone le carre
    wrapperGroup.appendChild(newSquare); //Boucles les carrés dans le container
    }    
}

const newSquareLead = square.cloneNode();
wrapper.appendChild(newSquareLead);


addSquares();


