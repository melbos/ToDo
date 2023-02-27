function createTodo(todo) {
    // parent element - spremamo u konstantu
    const parentElement = document.querySelector('.todoContainer');

    // kreirati article element s klasom todo
    const article = document.createElement('article');
    article.className = 'todo';

    // u article upisati vrijednost
    article.innerText = todo;

    // appendati article parent elementu
    parentElement.appendChild(article);
}

function handleSubmit(ev) {
    ev.preventDefault();

    const form = document.getElementById('form');
    const formData = new FormData(form);
    const todo = formData.get('todo');

    createTodo(todo);
    formData.set('todo', 72);
}

const form = document.getElementById('form');
form.addEventListener('submit', (ev) => handleSubmit(ev));
