function populateBoard(size){
    let board = document.querySelector(".board");
    let square = board.querySelectorAll("div");
    square.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size * size;

    for(let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
        
        square.style.backgroundColor = "blue";
        board.insertAdjacentElement("beforeend", square);
        
    }
  
}




populateBoard(16);

function changeSize(input) {
    populateBoard(input);
}



function changeColor(){
    let board = document.querySelector(".board");
    let square = board.querySelectorAll("div");
    
    square.style.backgroundColor = "red";
}

//board.style.gridTemplateColums = "(repeat(16 , 1fr)";
//board.style.gridTemplateRows = "(repeat(16 , 1fr)";







