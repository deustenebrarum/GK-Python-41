function getRandomColor() {
    const colors = [
        '228', '43', '144',
        '211', '56', '177',
        '46', '204', '113',
        '155', '89', '182',
        '52', '177', '168',
        '231', '138', '19',
        '227', '86', '86',
        '243', '156', '18',
        '211', '84', '0'
    ];
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor3 = colors[Math.floor(Math.random() * colors.length)];
    return `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
}

function getRandomTransform() {
    const rotate = Math.round(Math.random() * 360);
    const skew = Math.round(Math.random() * 10);
    const scale = 1 + Math.round(Math.random());

    return `rotate(${rotate}deg) skew(${skew}deg) scale(${scale})`;
}

function generateField(count) {
    const fieldElement = document.querySelector('.field');

    fieldElement.classList.add('field_active');

    for (let i = 0; i < count; i++) {
        const item = document.createElement('div');
        item.classList.add('field__item');

        item.style.backgroundColor = getRandomColor();
        item.style.top = 5 + Math.round(Math.random() * 90) + '%';
        item.style.left = 5 + Math.round(Math.random() * 90) + '%';
        item.style.transform = getRandomTransform();

        fieldElement.append(item);
    }

    fieldElement.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('field__item')) {
            event.target.remove();
        }
    });
}

const countForm = document.querySelector('.count-form');

countForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const count = +countForm.querySelector('.count-form__input').value;
    document.querySelector('.count-form-container').remove();
    generateField(count);
});
