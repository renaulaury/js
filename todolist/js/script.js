//document > document html
//query selector > selecteur (css)
//addEventListener > Ecoute ce qu'il se passe (clic de souris)
//cloneNode > noeud à dupliquer (vrai : enfants doivent être clonés)


const addBtn = document.querySelector('#btn'); //Récupére le bouton d'ajout 
const taskCard = document.querySelector(".todoCard"); //Récupére la class de la carte
const tasksContainer = document.querySelector('#todoCards'); //Récupérer le container de la class
const delBtn = document.querySelector('.delBtn'); // Récupére la poubelle
const compteur = document.querySelector('.compteur'); //Récupere le compteur

addBtn.addEventListener('click', addTask); //Ecoute bouton


//Ajout d'une card : 
//qui va duppliquer la carte complete
//qui va declarer une nouvelle variable pour toute nouvelle icone
//qui va déclarer une nouvelle variable pour tout nouvel textarea
//qui va afficilier une valeur au textarea
//qui appelle la fonction delete lors de l'écoute du clic
//qui demande d ajouter les enfants de totoCards et donc de les duppliquer

function addTask() {
    const newTask = taskCard.cloneNode(true); 
    const newDelBtn = newTask.querySelector('.delBtn'); 
    const newTextArea = newTask.querySelector('.task');

    newTextArea.value = "New task";
    newDelBtn.addEventListener('click', function() {
        deleteTask(newTask);
    });

    tasksContainer.appendChild(newTask);
    updateCount();
}

//Suppression d'une card :
//Appelle de la fonction delete quand la poubelle est cliquée
delBtn.addEventListener('click', function() {
    deleteTask(taskCard)
});

//Fonction qui supprime une card
function deleteTask(task) {
    task.remove();
    updateCount();
}

//Fonction compteur
function updateCount(){
    const taskCard = tasksContainer.children.length; //Récupére nombre de cartes situés dans le container (tableau)
    compteur.textContent = taskCard ; //compte le nombre de cartes
}

updateCount()



