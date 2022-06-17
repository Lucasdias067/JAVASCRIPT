const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

inputTarefa.onkeypress = (e) => {
    if (!inputTarefa.value) return;
    if(e.keyCode === 13) { 
        criaTarefa(inputTarefa.value)
        clearInput()
    }
}

btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
    clearInput()
})

function criaTarefa(textoInput) {
    const li = document.createElement('li');
    li.innerHTML = textoInput;
    tarefas.append(li)
    clearButton(li)
    salvarTarefas()
}

function clearInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function clearButton(li) {
    const button = document.createElement('button');
    button.innerText = "Apagar"
    button.setAttribute('class', 'apagar')
    li.appendChild(button);
}

tarefas.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
    }
    salvarTarefas()
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.textContent;
        tarefaTexto = tarefaTexto.replace('Apagar', '');

        listaDeTarefas.push(tarefaTexto);
        console.log(listaDeTarefas)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas' ,tarefasJSON)
}

function addSavedTasks() {
    const tarefas = localStorage.getItem('tarefas')
    const tarefasLista = JSON.parse(tarefas)
    for (let tarefa of tarefasLista) {
        criaTarefa(tarefa)
    }
}

addSavedTasks()