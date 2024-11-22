import { quotes } from "./quotes4.js"; 

//Pour stocker on utilise localStorage.setItem('key', 'value')
//Pour récupérer localStorage.getItem('nom')


const storedQuotes = localStorage.getItem('quotes'); // Récupérer les citations depuis le localStorage



// Si des citations existent dans le localStorage
if (storedQuotes) {
    const quotesArray = JSON.parse(storedQuotes);  // Convertir le JSON en tableau

    // Sélectionner l'élément HTML où afficher les citations
    const quotesContainer = document.getElementById('quotes');

    // Pour chaque citation dans le tableau, créer un nouvel élément <p> et l'ajouter au conteneur
    quotesArray.forEach(quote => {
        const quoteElement = document.createElement('p'); // Créer un nouvel élément <p>
        quoteElement.textContent = `"${quote.content}" — ${quote.author}`;  // Ajouter le texte de la citation
        quotesContainer.appendChild(quoteElement); // Ajouter l'élément <p> dans le conteneur
    });
}

