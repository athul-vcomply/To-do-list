document
  .getElementById("todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var todoInput = document.getElementById("todo-input");
    if (todoInput.value.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    var todoList = document.getElementById("todo-list");
    var newTask = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        this.parentNode.remove();
      }
    });
    var span = document.createElement("span");
    span.textContent = todoInput.value;
    var editButton = document.createElement("button");
    editButton.className = "edit-button";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
      var taskText = span.textContent;
      var newTaskText = prompt("Edit task:", taskText);
      if (newTaskText.trim() === "") {
        alert("Task cannot be empty");
      } else if (newTaskText !== null) {
        span.textContent = newTaskText;
      }
    });
    newTask.appendChild(checkbox);
    newTask.appendChild(span);
    newTask.appendChild(editButton);
    todoList.appendChild(newTask);
    todoInput.value = "";
  });
