const container = document.querySelector('.container');

function createGrid(squaresPerSide) {
    container.innerHTML = ''; // Limpa a grade existente
    const squareSize = 960 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.flexBasis = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.dataset.darkness = 0; // Define a opacidade inicial como 0%

        square.addEventListener('mouseover', () => {
            let currentDarkness = parseFloat(square.dataset.darkness);

            // Gera uma cor RGB aleatória
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            // Incrementa a escuridão em 10% a cada interação
            currentDarkness += 0.1;
            if (currentDarkness > 1) currentDarkness = 1;

            // Aplica a cor com a opacidade baseada na escuridão
            square.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${currentDarkness})`;
            square.dataset.darkness = currentDarkness; // Atualiza o nível de escuridão
        });

        container.appendChild(square);
    }
}

function resetGrid() {
    let squaresPerSide = parseInt(prompt("Enter the number of squares per side (maximum 100):"));
    if (squaresPerSide > 100) {
        squaresPerSide = 100;
    } else if (squaresPerSide < 1 || isNaN(squaresPerSide)) {
        squaresPerSide = 16;
    }
    createGrid(squaresPerSide);
}

// Cria a grade inicial
createGrid(16);
