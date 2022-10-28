const openCreat = () => {
  const creatTaskBlock = document.querySelector(".creat-task");
  creatTaskBlock.classList.toggle("active");
};

const creatTask = () => {
  let header = document.querySelector("#header").value;
  let text = document.querySelector("#text").value;
  const taskWrapp = document.querySelector(".tasks__wrapp");

  let task = document.createElement("div");
  task.className = "task";

  const id = Math.floor(Math.random() * 10000000);
  task.setAttribute("id", String(id));

  let taskChanse = document.createElement("button");
  taskChanse.className = "btn task__chanse";
  taskChanse.innerHTML = "Изменить";
  taskChanse.setAttribute("onClick", `changeTask(${id})`);

  let taskDelete = document.createElement("button");
  taskDelete.className = "btn task__delete";
  taskDelete.innerHTML = "Удалить";
  taskDelete.setAttribute("onClick", `deleteTask(${id})`);

  let taskHeader = document.createElement("h2");
  taskHeader.innerHTML = header;

  let taskText = document.createElement("p");
  taskText.innerHTML = text;

  task.appendChild(taskHeader);
  task.appendChild(taskText);
  task.appendChild(taskChanse);
  task.appendChild(taskDelete);
  taskWrapp.appendChild(task);

  header = document.querySelector("#header").value = "";
  text = document.querySelector("#text").value = "";
};

const deleteTask = (id) => {
  let wrapper = document.querySelector(".tasks__wrapp");

  const askUser = confirm("Удалить задачу?");

  if (askUser === true) {
    const elementToDelete = document.getElementById(`${id}`);
    wrapper.removeChild(elementToDelete);
  }
};

const changeTask = (id) => {
  const element = document.getElementById(`${id}`);

  const title = element.getElementsByTagName("h2")[0];
  const description = element.getElementsByTagName("p")[0];
  const button = element.getElementsByTagName("button")[0];

  const inputTitle = document.createElement("input");
  inputTitle.value = title.textContent;

  const inputDescription = document.createElement("input");
  inputDescription.value = description.textContent;

  title.parentNode.replaceChild(inputTitle, title);
  description.parentNode.replaceChild(inputDescription, description);

  button.setAttribute("onClick", `changeValues(${id})`);
};

const changeValues = (id) => {
  const element = document.getElementById(`${id}`);

  const inputTitle = element.getElementsByTagName("input")[0];
  const inputDescription = element.getElementsByTagName("input")[1];

  const titleHTML = document.createElement("h2");
  titleHTML.innerText = inputTitle.value;

  const descriptionHTML = document.createElement("p");
  descriptionHTML.innerText = inputDescription.value;

  inputTitle.parentNode.replaceChild(titleHTML, inputTitle);
  inputDescription.parentNode.replaceChild(descriptionHTML, inputDescription);
};
