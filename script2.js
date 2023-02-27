function init() {
    const form = document.getElementById('form');

    function createTodo(todo) {
        //create parent
        const parentElement = document.querySelector('.todoContainer');

        //new article with class
        const article = document.createElement('article');
        article.className = 'todo';

        const timeNow = Date.now();
        article.setAttribute('data-id', timeNow);

        parentElement.appendChild(article);

        const container = document.createElement('div');
        article.appendChild(container);

        //new article create svg
        const svg = document.createElement('svg');
        svg.innerHTML =
            '<svg viewBox="0 0 10 10" width="10" height="10"><circle cx="5" cy="5" r="5" /></svg>';

        //svg append to article element
        article.appendChild(svg);

        const dot = document.createElement('div');
        dot.className = 'dot';
        article.appendChild(dot);

        //create paragraph, define text and append to parent
        const paragraph = document.createElement('p');
        paragraph.innerText = todo;
        article.appendChild(paragraph);

        /*const paragraph2 = document.getElementById('edit');
        const edit_button = document.getElementById('edit-button');
        edit_button.addEventListener('click', function () {
            paragraph2.contentEditable = true;
        });*/

        const editButton = document.createElement('button');
        editButton.onclick = () => editTodo(timeNow);
        editButton.innerText('Edit');
        article.appendChild(editButton);
    }

    function handleSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(form);
        const todo = formData.get('todo');
        if (todo !== '') {
            createTodo(todo);
        }
        formData.reset();
    }

    form.addEventListener('submit', (ev) => handleSubmit(ev));
}
init();

function saveTodo(id) {
    const parentElement = document.querySelector(`[data-id ='${id}']`);
    const editBttn = parentElement.querySelector('button');
    const para = parentElement.querySelector('p');

    editBttn.innerText = 'Edit';
    editBttn.onclick = () => saveTodo(id);

    para.contentEditable = false;
}

function editTodo(id) {
    const parentElement = document.querySelector(`[data-id ='${id}']`);
    const editBttn = parentElement.querySelector('button');
    const para = parentElement.querySelector('p');

    editBttn.innerText = 'Save';
    editBttn.onclick = () => saveTodo(id);

    para.contentEditable = true;
    para.onblur = () => saveTodo(id);
}
