function changeBackground() {
    const colors = ['#ffb3ba', '#baffc9', '#bae1ff', '#803bec', '#333'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const section = document.querySelector('.example-section'); // Selecciona la sección interactiva
    section.style.backgroundColor = randomColor;
}
