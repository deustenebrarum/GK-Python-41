document.addEventListener('DOMContentLoaded', () => {
    const id = new URLSearchParams(window.location.search).get('id');

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => loadPage(user))
});

function loadPage(user) {
    const nameElement = document.querySelector('.user-name');
    const emailElement = document.querySelector('.text-body-secondary');

    nameElement.textContent = user.name;
    emailElement.textContent = user.email;

    loadPosts(user.id);
}

function loadPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            addPosts(posts);
        });
}

function addPosts(posts) {
    const container = document.querySelector('.posts-container');

    for (const post of posts) {
        const postElement = document.createElement('div');
        postElement.classList.add('card');
        postElement.classList.add('mb-3');
        postElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.body}</p>
            </div>
        `;
        container.append(postElement);
    }
}

function capitalized(str, ...args) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

capitalized`hello ${user.name}`
