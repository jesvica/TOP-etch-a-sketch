const container = document.querySelector('#container');

// Create the grid of squares
for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
        square.style.width = (100 / 16) + "%"

        // Change the background colour of a square when mouse enters
        square.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });

}

const squareAmount = document.getElementById('square-amount')
squareAmount.addEventListener('click', function() {
    let size;

    do {
        const input = prompt('How many squares?');
        if (input === null) {
            return;
        }

        size = Number(input);

        if(isNaN(size)) {
            alert('please enter a number')
        } else if (size > 100 || size <= 0) {
            alert('please enter a number between 1 - 100')
        }
     } while (isNaN(size) || size > 100 || size <= 0);

     container.innerHTML = "";


     for (let j = 0; j < size * size; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

          square.style.width = (100/size) + "%";

        // Change the background colour of a square when mouse enters
        square.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });

}
})

