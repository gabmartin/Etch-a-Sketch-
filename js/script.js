let container = document.querySelector('section');
let columns = 16;
let rows = 16;

// Creating the columns
for (let i = 0; i < columns; i++) { 
    
    let column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);

    // Creating every square
    for (let i = 0; i < 16; i++) { 
    
        let unit = document.createElement('div');
        unit.classList.add('unit');
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


