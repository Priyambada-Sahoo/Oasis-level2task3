document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("add");
    const taskList = document.getElementById("task-list");
  
    addButton.addEventListener("click", addTask);
  
    taskInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  
    taskList.addEventListener("click", function (event) {
      if (event.target.className === "delete") {
        event.target.parentElement.remove();
      }
    });
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
          ${taskText}
          <button class="delete">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
      }
    }
  });
  