const addBtn = document.querySelector('#btn');
addBtn.addEventListener('click', addTask);


const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector('#todoCards');

//Ajout d'une card
function addTask() {
    const newTask = taskCard.cloneNode(true);
    const newDelBtn = newTask.querySelector('.delBtn');
    const newTextArea = newTask.querySelector('.task');

    newTextArea.value = "New task";
    newDelBtn.addEventListener('click', function() {
        deleteTask(newTask);
    });

    tasksContainer.appendChild(newTask);
}

//Suppression d'une card
const delBtn = document.querySelector('delBtn');
delBtn.addEventListener('click', function() {
    deleteTask(taskCard)
});

function deleteTask(task) {
    task.remove();
}




