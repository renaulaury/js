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
        squareLead.style.backgroundColor = newSquare.style.backgroundColor; //Récup la couleur du carré pour le mettre sur le lead
        afficherStyles(newSquare)  
     })
}

function afficherStyles(newSquare) {
    const styles = window.getComputedStyle(newSquare);

    const cssCode = `
        background-color: ${styles.backgroundColor};
        `;   
        
    // alert(cssCode);
    squareLead.innerText = cssCode;
}

 //

