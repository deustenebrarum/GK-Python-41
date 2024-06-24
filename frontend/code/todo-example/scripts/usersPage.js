document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
})

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => createUsers(users))
}

function createUsers(users) {
    const usersListElement = document.querySelector('.users-list');

    for (const user of users) {
        const userElement = document.createElement('li');
        userElement.classList.add('user-item');
        userElement.innerHTML = `
            <a href="user.html?id=${user.id}" class="card">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${user.email}</h6>
                    <p class="card-text">${user.company.name}</p>
                </div>
            </a>
        `
        usersListElement.append(userElement);
    }
}
