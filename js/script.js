let container = document.querySelector('#container');
let gridSize = 16;

function createGrid(gridSize){
    // Creating the columns
    for (let i = 0; i < gridSize; i++) { 
        
        let column = document.createElement('div');
        column.classList.add('column');
        container.appendChild(column);

        // Creating every square
        for (let i = 0; i < gridSize; i++) { 
            let unit = document.createElement('div');
            unit.classList.add('unit');
            unit.style.width = `calc(30vw/${gridSize})`;
            unit.style.height = `calc(30vw/${gridSize})`;
            column.appendChild(unit);
        } 
    }

    // Hovering effect
    let unitsArray = document.querySelectorAll('.unit');
    unitsArray.forEach(function(unit){
        unit.addEventListener("mouseover", function(){
            unit.classList.add("black");
        });
    });
}

createGrid(gridSize);

function promptWindow(){
    let unitsArray = document.querySelectorAll('.unit');
    unitsArray.forEach(unit => unit.remove());
    gridSize = prompt('Cantidad de pixeles', 16);
    createGrid(gridSize);
}

// Reset button and popup window
let popBtn = document.querySelector('#reset');
popBtn.addEventListener("click", promptWindow);




