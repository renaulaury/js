import { quotes } from "./quotes4.js"; 

//Pour stocker on utilise localStorage.setItem('key', 'value')
//Pour récupérer localStorage.getItem('nom')

const recupQuotes = localStorage.getItem('quotes'); // Récupérer les citations depuis le localStorage
// console.log(localStorage.getItem('quotes'));
const tableauQuotes = JSON.parse(recupQuotes); //Convertir JSON en tableau
// console.log(tableauQuotes);
const containerQuotes = document.getElementById('quotes');

// let listeFavoris = JSON.parse(localStorage.getItem('favoris'));//Récup la save des favoris
// console.log(listeFavoris);
// const containerQuotesFav = document.getElementById('quotesFav');


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

        // ajoutFavoris(coeurI, tableauQuotes[q]);
    }
}

// export function afficherHeader() {
//     const header = document.querySelector('header');

//     const nav = document.createElement('nav');
//     nav.classList.add('navbar');
//     header.appendChild(nav);

//     const accueil = document.createElement('a');
//     accueil.classList.add('accueil');    
//     accueil.href = "index.html";
//     nav.appendChild(accueil);

//     const textAcc = "Accueil";
//     accueil.insertAdjacentHTML('beforeend', textAcc);    

//     const favoris = document.createElement('a');
//     favoris.classList.add('favoris');
//     favoris.href = "favoris.html";
//     nav.appendChild(favoris);

//     const textFav = "Mes favoris";
//     favoris.insertAdjacentHTML('beforeend', textFav);    
// }

// function ajoutFavoris(coeur, citation) {
//     coeur.addEventListener('click', function() {
//         if (coeur.style.color !== 'red') {
//             coeur.style.color = 'red';            
//             listeFavoris.push(citation); //ajout au tableauFav
//             // for (let i = 0; i < listeFavoris.length; i++) {
//             //     console.log(listeFavoris[i].content); 
//             // }
//         } else {
//             coeur.style.color = '';
//             //Filter crée un nouveau tableau (fav = citation) : supprime dans le tableau la citation, les 2 éléments sont comparés pour pouvoir etre supprimé ou non
//             listeFavoris = listeFavoris.filter(fav => fav.content !== citation.content);//suppression du tablFav
//             // for (let i = 0; i < listeFavoris.length; i++) {
//             //     console.log(listeFavoris[i].content); 
//             // }
//         }
//             // sauvegarderFavoris()
//     });
// }

// function sauvegarderFavoris() {
//     localStorage.setItem('favoris', JSON.stringify(listeFavoris));  // Sauvegarde favoris dans le localStorage - Stringify permet de convertir mon tableau en format json
// }

// const containerQuotesFav = document.getElementById('quotesFav');

// export function afficherFavoris() {  
//     for(let q = 0; q < listeFavoris.length; q++) {
//         const blockCitationFav = document.createElement('div'); //je crée une dic pour y mettre 1 citation et 1 coeur
//         blockCitationFav.classList.add('blockCitationFav');
//         containerQuotesFav.appendChild(blockCitationFav);

//         const citationFav = document.createElement('p'); //je crée un 1er p pour y mettre 1 citation
//         citationFav.classList.add('citationFav');
//         blockCitationFav.appendChild(citationFav);
        
//         const citationsFav = `${listeFavoris[q].content}" - "${listeFavoris[q].author}`;
//         citationFav.insertAdjacentHTML('beforeend', citationsFav);
        
//         const coeur = document.createElement('p'); //je crée un 2e p pour y mettre mon coeur
//         coeur.classList.add('coeur');    
//         blockCitationFav.appendChild(coeur);

//         const coeurI = document.createElement('i'); //pas possible d'inserer avec inserAdjacent car insert = string
//         coeurI.classList.add('fa-solid', 'fa-heart');
//         coeurI.style.color = 'red';
//         coeur.appendChild(coeurI);     
// }}

// function index() {   
//     afficherHeader(); 
//     afficherQuotes();   //Affiche les quotes et enregistre les favoris
// }

// index();
afficherQuotes()


/*je dois d'abord récup les quotes du json*/
/*Convertir le json en tableau... JSON.parse(nom du localStorage)*/
/*créer un p pour les inserer dedans avec une boucle*/
/* Créer un p et inserer un coeur dans la div de l html*/
//FAVORIS
/*Créer un nav dans le header puis un p puis un lien*/
//quand je clic sur le coeur :
/*ca met en rouge > creation d'un élément i et lui dire quand je clic ca devient rouge et vice versa*/

/*puis ajouter a une liste*/
/*créer un new array, array qui ressemble au JSON ajouter et supprimer lors du clic au coeur*/
/*sauvegarder dans le localstorage*/
/*quand je clic sur mes favoris ca affiche la liste*/
/*créer nouvelles balises dans favoris.html*/


/*Afficher le tableau dans la page des favoris : mais comment ?*/


