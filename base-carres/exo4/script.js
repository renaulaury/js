const card = document.createElement('div');
card.classList.add('social');

const reseaux = ["Facebook", "Twitter", "Instagram"];
const icones = ["<i class='fa-brands fa-facebook'></i>", "<i class='fa-brands fa-twitter'></i>", "<i class='fa-brands fa-instagram'></i>"]

function addReseaux() {
    for(let i = 0; i < reseaux.length; i++){
        const newCard = card.cloneNode(true);
        wrapperSociaux.appendChild(newCard);

        newCard.classList.add(reseaux[i].toLowerCase());

        newCard.insertAdjacentHTML('beforeend', icones[i]);
        
        //newCard.innerHTML = icones[i];  Pas possible car apres je peux pas rajouter le nom du rzo     
        //newCard.appendChild(icones[i]); Pas possible car ajout un element du dom au lieu de string

        mouvementAuclic(newCard, i);
    }
}

let activeCard = null;

function mouvementAuclic(newCard, i) {
    newCard.addEventListener('click', function() { 
        const wrapper = document.getElementById('wrapper');        
        const styles = window.getComputedStyle(newCard);
        const backgroundColor = styles.backgroundColor; 

        if(!newCard.classList.contains('active')){ //Action au premier clic            
            if (activeCard) {     
                //Si carte active : Retour arriere du css
                activeCard.classList.remove('active');
                
                wrapper.style.backgroundColor = "";

                activeCard.style.border = "";
                activeCard.style.borderRadius = "";   

                const activeTextRzo = activeCard.querySelector('p');

                if (activeTextRzo !== null) {
                    activeTextRzo.remove();}
            } 
                //Mep du css du rzo actuel
                newCard.classList.add('active');

                wrapper.style.backgroundColor = backgroundColor;

                newCard.style.border = "2px solid black";
                newCard.style.borderRadius = "10%";    
                newCard.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.5)";

                // Ajoute le texte du réseau social
                const textRzo = document.createElement('p'); //Création de la balise avec sa class et sa mep
                textRzo.textContent = reseaux[i]; 
                newCard.appendChild(textRzo);         

                activeCard = newCard;
        } else { //Action au 2e clic on retire tout
            newCard.classList.remove('active');
            activeCard = null;

            wrapper.style.backgroundColor = ""; 

            newCard.style.border = "";
            newCard.style.borderRadius = "";
            
            const textRzo = newCard.querySelector('p');
            
            if (textRzo !== null) {
                textRzo.remove();
        }}
        }); 
}


addReseaux();





/*je dois mettre en place la methode active ou pas*/
/*si c est actif plusieurs css*/
/*background a mep avec getComputedStyle, pour annuler il faut annuler via le wrapper a cause de get..*/
/*bordures > mep quand on clique sur une autre icone / rajout d'un else if pour gérer */
/*si la class != active alors tu met active + styles css*/
/*si la classe = active alors enleve css*/
/*si la class != active alors tu met active sur celle cliqué et t enleve les autres*/
/*donc a et c ensemble et b seule*/
