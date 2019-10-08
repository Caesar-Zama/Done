const todoList = {
  todos: [],
  currentDay: document.querySelector("p"),
  userEntry: document.querySelector(".input-field"),
  userEntryField: document.querySelector("input"),
  addTodoBtn: document.querySelector(".fixed-action-btn"),
  todoCard: document.querySelector("ul"),
  showCurrentDay: function(month, date, year, dateFormat) {
    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    // retrieve information about current day
    month = months[today.getMonth()];
    date = today.getDate();
    year = today.getFullYear();
    // Struture date 
    dateFormat = `${month} ${date} ${year}`;
    this.currentDay.textContent = dateFormat;
  },
  addTodo: function() {
    // Gather user task
    const userTodo = (e, todo) => {
      this.userEntry.classList.add("show");
      // Check if user entered todo
      if (e.key === "Enter") {
        todo = this.userEntryField.value;
        this.todos.push(todo);
        this.userEntry.classList.remove("show");
        this.userEntryField.value = "";
        this.displayTodo();
      } 
    }
    this.userEntryField.addEventListener("keydown", userTodo);
    this.addTodoBtn.addEventListener("click", userTodo);
  },
  displayTodo: function() {
    const todosCopy = this.todos.slice();
    const todoId = this.todos.indexOf(this.todos[this.todos.length - 1]);
    // Create todo element
    const newTodo = document.createElement("li");
    newTodo.id = todoId;
    newTodo.className = "align-vertical";
    newTodo.innerHTML = `<i class="custom-material-icons material-icons">radio_button_unchecked</i> <span>${todosCopy.pop()}</span>`;
    // Add todo element to DOM
    this.todoCard.append(newTodo);
  },
  completedTodo: function () {
    this.todoCard.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() === "span") {
        e.target.classList.toggle("stirke-through");
        e.target.previousElementSibling.classList.toggle("checkmark");
      } else if (e.target.tagName.toLowerCase() === "i") {
        e.target.classList.toggle("checkmark");
        e.target.nextElementSibling.classList.toggle("stirke-through");
      }
    });
  }
}

todoList.completedTodo();
todoList.showCurrentDay();
todoList.addTodo();


