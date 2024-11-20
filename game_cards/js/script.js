const box = document.createElement("div");
box.classList.add("box");

const board = document.querySelector("#board");
// board.appendChild(box);
// box.innerText = 1;



// let i = board.children.length, k , temp;
// while(--i > 0) { //on boucle tant que 1 oté de i est tjs +
//     //k stocke un nb aléatoire basé sur i
//     k = Math.floor(Math.random() * (i+1));
//     //temp pointe temporairement l'élément à la position k dans board
//     temp = board.children[k];
//     //remplace l'élément à la position k par l'élément à la position i
//     board.children[k] = board.children[i];
//     //place l'élément k pointé temporairement à la fin du contenu de board
//     board.appendChild(temp);
// }

// function shuffleChildren(parent) {
//     let children = parent.children;
//     let i = children.length, k, temp;

//     while(--i > 0) { //on boucle tant que 1 oté de i est tjs +
//         //k stocke un nb aléatoire basé sur i
//         k = Math.floor(Math.random() * (i+1));
//         //temp pointe temporairement l'élément à la position k dans board
//         temp = children[k];
//         //remplace l'élément à la position k par l'élément à la position i
//         children[k] = children[i];
//         //place l'élément k pointé temporairement à la fin du contenu de board
//         parent.appendChild(temp);
//     }
// }

let nb = 1;

for(let i = 1; i <= 10; i++) {
    const newbox = box.cloneNode();
    newbox.innerText = i;
    board.appendChild(newbox);

    newbox.addEventListener("click", function(){        

        if(i == nb) {
            newbox.classList.add("box-valid");

            if(i == board.children.length) {
                board.querySelectorAll(".box").forEach(function(box){
                    showReaction("success", box)
                })
            }
            nb++;
            } 
            else if (i > nb){
                showReaction("error", newbox)
                nb = 1;
                board.querySelectorAll(".box-valid").forEach(function(validBox){
                    validBox.classList.remove("box-valid");
                })
            }
            else {
                showReaction("notice", newbox)
                }
            })
        }


function shuffleChildren(parent) {
    let children = parent.children;
    let i = children.length, k, temp;
    
    while(--i > 0) {
        k = Math.floor(Math.random() * (i+1));
        temp = children[k];
        children[k] = children[i];
        parent.appendChild(temp);
    }
}

function showReaction(type, clickedBox) {
    clickedBox.classList.add(type)
    if(type !== "success") {
        setTimeout(function(){
            clickedBox.classList.remove(type)
        }, 800)
    }
}


shuffleChildren(board);