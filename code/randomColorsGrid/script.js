document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');

    const width = 256;
    const height = 128;

    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${height}, 1fr)`;

    for (let i = 0; i < width * height; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        const color = randomColor();
        div.style.backgroundColor = color;
        div.style.boxShadow = `10px 10px 10px 20px ${color}`;
        container.appendChild(div);
    }
    
    container.addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('cell')) {
            event.target.style.backgroundColor = randomColor();
        }
    })
})

function randomColor() {
    const r = Math.floor(120 + Math.random() * 20);
    const g = Math.floor(70 + Math.random() * 50);
    const b = 0;
    return `rgb(${r}, ${g}, ${b})`;
}
