const fieldElement = document.querySelector(".field");
const cells = new Array(3).fill(null);

for (let i = 0; i < cells.length; i++) {
    cells[i] = new Array(3).fill(null);
    
    for (let j = 0; j < cells[i].length; j++) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        fieldElement.appendChild(cellElement);

        cells[i][j] = cellElement;
    }
}

function isMarkedCell(cellElement) {
    return (
        cellElement.classList.contains('x-mark') ||
        cellElement.classList.contains('o-mark')
    );
}

let currentTurnClassName = "x-mark";

fieldElement.addEventListener("click", (event) => {
    const target = event.target;
    const i = cells.findIndex(row => row.includes(target));

    if (i === -1) {
        return;
    }

    const j = cells[i].indexOf(target);

    if (isMarkedCell(cells[i][j])) {
        return;
    }

    cells[i][j].classList.add(currentTurnClassName);

    if (currentTurnClassName === "x-mark") {
        currentTurnClassName = "o-mark";
    } else {
        currentTurnClassName = "x-mark";
    }
});

