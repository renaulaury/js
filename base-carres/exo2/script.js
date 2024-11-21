const square = document.createElement('div'); //Crée une div
square.classList.add("carre"); //Ajoute une class a la div


function addSquare() {
   const wrapper = document.getElementById('wrapper'); //Récupere l id du container

   for(let i = 1; i <= 4; i++) {    
    const newSquare = square.cloneNode(); //Clone le carre
    wrapper.appendChild(newSquare); //Boucls les carrés dans le container
} 
}

addSquare();
