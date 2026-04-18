const container = document.querySelector('#container');

// Create the grid of squares
for (let i = 0; i < 256; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        // Change the background colour of a square when mouse enters
        square.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });

}
