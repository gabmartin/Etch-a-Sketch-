let container = document.querySelector('#container');
let gridSize = 16;
let sizeDisplay = document.getElementById('textInput');
let slider = document.getElementById('gridRange');

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

function updateGrid(value) {
    sizeDisplay.innerHTML = `${value} x ${value}`; 
    let unitsArray = document.querySelectorAll('.unit');
    unitsArray.forEach(unit => unit.remove());
    gridSize = value;
    createGrid(gridSize);
  }
  
