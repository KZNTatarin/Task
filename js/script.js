const openCreat = () => {
    const creatTaskBlock = document.querySelector('.creat-task');
    creatTaskBlock.classList.toggle('active');
}

const creatTask = () => {
    let header = document.querySelector('#header').value;
    let text = document.querySelector('#text').value;
    const taskWrapp = document.querySelector('.tasks__wrapp');

    let task = document.createElement('div');
    task.className = 'task';

    let taskChanse = document.createElement('button');
    taskChanse.className = 'btn task__chanse';
    taskChanse.innerHTML = 'Изменить'

    let taskDelete = document.createElement('button');
    taskDelete.className = 'btn task__delete';
    taskDelete.innerHTML = 'Удалить';

    let taskHeader = document.createElement('h2');
    taskHeader.innerHTML = header;

    let taskText = document.createElement('p');
    taskText.innerHTML = text;
    
    task.appendChild(taskHeader);
    task.appendChild(taskText);
    task.appendChild(taskChanse);
    task.appendChild(taskDelete);
    taskWrapp.appendChild(task);

    header = document.querySelector('#header').value = '';
    text = document.querySelector('#text').value = '';
}


const deleteTask = (task) => {
    let deleteBtn = document.querySelectorAll('.task__delete');
    deleteBtn.addEventListener('click', function() {
        taskWrapp.removeChild(task);
    })
}








