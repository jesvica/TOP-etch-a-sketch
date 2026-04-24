const container = document.querySelector('#container');

let currentMode = "black";

const blackButton = document.getElementById('black');
const colorButton = document.getElementById('color');

blackButton.addEventListener('click', function() {
    updateMode("black");
});

colorButton.addEventListener('click', function() {
    updateMode("color");
});

function updateMode(color) {
    currentMode = color;
}

function createGrid(size) {
    
    container.innerHTML = "";

     for (let j = 0; j < size * size; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.style.width = (100/size) + "%";

        square.addEventListener('mouseenter', function() {
            if (currentMode === "black") {
                this.style.backgroundColor = "black";
            } else if (currentMode === "color") {
                this.style.backgroundColor = getRandomColor();
            }
        })
    }
}


// Generate a random colour
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}


// Create the grid of squares
createGrid(16);

// const squareAmount = document.getElementById('square-amount')
// squareAmount.addEventListener('click', function() {
//     let size;

//     do {
//         const input = prompt('How many squares?');
//         if (input === null) {
//             return;
//         }

//         size = Number(input);

//         if(isNaN(size)) {
//             alert('please enter a number')
//         } else if (size > 100 || size <= 0) {
//             alert('please enter a number between 1 - 100')
//         }
//      } while (isNaN(size) || size > 100 || size <= 0);

//     container.innerHTML = "";


//      for (let j = 0; j < size * size; j++) {
//         const square = document.createElement('div');
//         square.classList.add('square');
//         container.appendChild(square);

//         square.style.width = (100/size) + "%";


//         square.addEventListener('mouseenter', function() {
//             if (currentMode === "black") {
//                 this.style.backgroundColor = "black";
//             } else if (currentMode === "color") {
//                 this.style.backgroundColor = getRandomColor();
//             }
//         })

// }
// })

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearGrid);

function clearGrid() {
   let square = container.querySelectorAll('.square');

  for (let k = 0; k < square.length; k++) {
    square[k].style.backgroundColor = "";
  }
}

const gridSize = document.getElementById("grid-size-range");

gridSize.addEventListener('input', function() {
    createGrid(gridSize.value);
})