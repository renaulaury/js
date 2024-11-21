const card = document.createElement('div');
card.classList.add('social');

const reseaux = ["Facebook", "Twitter", "Instagram"];
const icones = ["<i class='fa-brands fa-facebook'></i>", "<i class='fa-brands fa-twitter'></i>", "<i class='fa-brands fa-instagram'></i>"]

function addReseaux() {
    for(let i = 0; i < reseaux.length; i++){
        const newCard = card.cloneNode(true);
        wrapperSociaux.appendChild(newCard);

        newCard.classList.add(reseaux[i].toLowerCase());
        
        newCard.innerHTML = icones[i];        
        //newCard.appendChild(icones[i]); Pas possible car ajout un element du dom au lieu de string

        mouvementAuclic(newCard);
    }
}

function mouvementAuclic(newCard) {
    newCard.addEventListener('click', function() {
        const wrapper = document.getElementById('wrapper');        
        const styles = window.getComputedStyle(newCard);
        const backgroundColor = styles.backgroundColor; 
        wrapper.style.backgroundColor = backgroundColor;

    }); 
}


addReseaux();


