document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    const objects = [];

    const count = 100;

    for (let i = 0; i < count; i++) {
        objects.push(createObject(container));
    }
    
    setInterval(() => {
        for (const object of objects) {
            object.position.x += object.direction.x * object.speed;
            object.position.y += object.direction.y * object.speed;
            object.element.style.top = object.position.y + 'px';
            object.element.style.left = object.position.x + 'px';
            if (object.position.x > container.offsetWidth - object.element.offsetWidth || object.position.x < 0) {
                object.direction.x *= -1;
                if (object.speed < 50) {
                    object.speed += 1;
                }
            }
            if (object.position.y > container.offsetHeight - object.element.offsetHeight || object.position.y < 0) {
                object.direction.y *= -1;
                if (object.speed < 50) {
                    object.speed += 1;
                }
            }
        }
    }, 20)
})

function createObject(container) {
    const objectElement = document.createElement('div');
    objectElement.classList.add('object');
    objectElement.style.backgroundColor = `rgb(${Math.round(100 + Math.random() * 155)}, ${Math.round(100 + Math.random() * 155)}, ${Math.round(100 + Math.random() * 155)})`;
    container.appendChild(objectElement);

    return {
        element: objectElement,
        position: {
            x: container.clientWidth / 2 - objectElement.offsetWidth / 2,
            y: container.clientHeight / 2 - objectElement.offsetHeight / 2
        },
        direction: {
            x: (Math.random() > 0.5 ? 1 : -1) * (0.25 + Math.random() * 0.75),
            y: (Math.random() > 0.5 ? 1 : -1) * (0.25 + Math.random() * 0.75)
        },
        speed: 5 + Math.random() * 5
    }
}
