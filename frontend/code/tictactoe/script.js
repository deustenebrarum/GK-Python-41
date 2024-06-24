const fieldElement = document.querySelector('.field');

const field = [];

const X_MARK = 'X';
const O_MARK = 'O';

function createField() {
    for (let i = 0; i < 3; i++) {
        field.push([]);
        for (let j = 0; j < 3; j++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('field__cell');
            fieldElement.appendChild(cellElement);
            field[i].push(cellElement);
        }
    }
}

function placeMark(element, playerMark) {
    if (playerMark === X_MARK) {
        element.classList.add('mark-x');
    } else {
        element.classList.add('mark-o');
    }
}

function hasMark(element) {
    return element.classList.contains('mark-x') || element.classList.contains('mark-o');
}

function getWinner(lastPlayerMark) {
    const lastPlayerMarkClassName = (
        lastPlayerMark === X_MARK ? 'mark-x' : 'mark-o'
    );

    // horizontal
    for (let i = 0; i < 3; i++) {
        if (field[i][0].classList.contains(lastPlayerMarkClassName) &&
            field[i][1].classList.contains(lastPlayerMarkClassName) &&
            field[i][2].classList.contains(lastPlayerMarkClassName)) {
            return lastPlayerMark;
        }
    }

    // vertical
    for (let i = 0; i < 3; i++) {
        if (field[0][i].classList.contains(lastPlayerMarkClassName) &&
            field[1][i].classList.contains(lastPlayerMarkClassName) &&
            field[2][i].classList.contains(lastPlayerMarkClassName)) {
            return lastPlayerMark;
        }
    }

    // diagonal
    if (field[0][0].classList.contains(lastPlayerMarkClassName) &&
        field[1][1].classList.contains(lastPlayerMarkClassName) &&
        field[2][2].classList.contains(lastPlayerMarkClassName)) {
        return lastPlayerMark;
    }

    if (field[0][2].classList.contains(lastPlayerMarkClassName) &&
        field[1][1].classList.contains(lastPlayerMarkClassName) &&
        field[2][0].classList.contains(lastPlayerMarkClassName)) {
        return lastPlayerMark;
    }

    return null;
}

let currentPlayerMark = X_MARK;

fieldElement.addEventListener('click', (event) => {
    if (!event.target.classList.contains('field__cell')) {
        return;
    }

    if (hasMark(event.target)) {
        return;
    }

    placeMark(event.target, currentPlayerMark);

    const winner = getWinner(currentPlayerMark);
    if (winner !== null) {
        fieldElement.remove();
        document.body.append('Winner: ' + winner);
    }

    currentPlayerMark = (currentPlayerMark === X_MARK ? O_MARK : X_MARK);
})

createField()
