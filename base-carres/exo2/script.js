const square = document.createElement('div'); //Crée une div
square.classList.add("carre"); //Ajoute une class a la div

const colors = ["green", "blue", "yellow", "red"];

function addSquares() {   
    for(let i = 0; i < 4; i++) {    
     const newSquare = square.cloneNode(); //Clone le carre
     wrapperGroup.appendChild(newSquare); //Boucles les carrés dans le container
     newSquare.style.backgroundColor = colors[i];

     changeColor(newSquare);
    }         
 }
 
 //Création et mep du carré leader
 const squareLead = document.createElement('div');
 squareLead.classList.add("squareLead");
 wrapper.appendChild(squareLead);
 
 
 addSquares();

function changeColor(newSquare) {
    newSquare.addEventListener('click', function(){
        squareLead.style.backgroundColor = newSquare.style.backgroundColor;
     })
}

 //Quand je clique sur un carré alors le leader prend sa couleur
 //j ai besoin addeventlist sur chaque carre
 //

