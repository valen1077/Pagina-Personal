let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    renderTasks();
  }
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = () => toggleTaskStatus(index);
    const label = document.createElement("label");
    label.innerText = task;
    const button = document.createElement("button");
    button.innerText = "Eliminar";
    button.onclick = () => deleteTask(index);

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(button);

    taskList.appendChild(li);
  });
}

function toggleTaskStatus(index) {
  tasks[index] = tasks[index].startsWith("✓ ") ? tasks[index].substring(2) : "✓ " + tasks[index];
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
