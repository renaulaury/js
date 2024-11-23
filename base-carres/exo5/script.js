import { quotes } from "./quotes4.js"; 

//Pour stocker on utilise localStorage.setItem('key', 'value')
//Pour récupérer localStorage.getItem('nom')

const recupQuotes = localStorage.getItem('quotes'); // Récupérer les citations depuis le localStorage
const tableauQuotes = JSON.parse(recupQuotes); //Convertir JSON en tableau
const containerQuotes = document.getElementById('quotes');


function afficherQuotes() {
    for(let q = 0; q < tableauQuotes.length; q++) {
        const blockCitation = document.createElement('div'); //je crée une dic pour y mettre 1 citation et 1 coeur
        blockCitation.classList.add('blockCitation');
        containerQuotes.appendChild(blockCitation);

        const citation = document.createElement('p'); //je crée un 1er p pour y mettre 1 citation
        citation.classList.add('citation');
        blockCitation.appendChild(citation);
        
        const citations = `${tableauQuotes[q].content}" - "${tableauQuotes[q].author}`;
        citation.insertAdjacentHTML('beforeend', citations);
        
        const coeur = document.createElement('p'); //je crée un 2e p pour y mettre mon coeur
        coeur.classList.add('coeur');    
        blockCitation.appendChild(coeur);

        const coeurI = document.createElement('i'); //pas possible d'inserer avec inserAdjacent car insert = string
        coeurI.classList.add('fa-solid', 'fa-heart')
        coeur.appendChild(coeurI);     

        ajoutFavoris(coeurI);
    }
}

function afficherHeader() {
    const header = document.querySelector('header');

    const nav = document.createElement('nav');
    nav.classList.add('navbar');
    header.appendChild(nav);

    const accueil = document.createElement('p');
    accueil.classList.add('accueil');
    nav.appendChild(accueil);

    const textAcc = "Accueil";
    accueil.insertAdjacentHTML('beforeend', textAcc);    

    const favoris = document.createElement('p');
    favoris.classList.add('favoris');
    nav.appendChild(favoris);

    const textFav = "Mes favoris";
    favoris.insertAdjacentHTML('beforeend', textFav);    


}

function ajoutFavoris(coeur) {
    coeur.addEventListener('click', function() {
        if (coeur.style.color !== 'red') {
            coeur.style.color = 'red';
        } else {
            coeur.style.color = '';
        }
    });
}

function index() {   
    afficherHeader(); 
    afficherQuotes();    
}

index();


/*je dois d'abord récup les quotes du json*/
/*Convertir le json en tableau... JSON.parse(nom du localStorage)*/
/*créer un p pour les inserer dedans avec une boucle*/
/* Créer un p et inserer un coeur dans la div de l html*/
//FAVORIS
/*Créer un nav dans le header puis un p puis un lien*/
//quand je clic sur le coeur :
/*ca met en rouge > creation d'un élément i et lui dire quand je clic ca devient rouge et vice versa*/

/*puis ca ajouter a une liste*/
/*créer un new array, ajouter et supprimer lors du clic au coeur*/
/*sauvegarder dans le localstorage*/
/*quand je clic sur mes favoris ca affiche la liste*/


