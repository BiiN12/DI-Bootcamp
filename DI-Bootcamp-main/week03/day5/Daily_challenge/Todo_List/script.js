const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const tasks = [];

const addTask = function () {
  if (taskInput.value != "") {
    tasks.push(taskInput.value);
    const li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `<input type="checkbox">${taskInput.value} <i class="fa-solid fa-x"></i>`;
    taskList.append(li);

    taskInput.value = "";
  } else {
    alert("Please input a task!");
  }
};

addTaskBtn.addEventListener("click", function (e) {
  e.preventDefault;
  addTask();
});
