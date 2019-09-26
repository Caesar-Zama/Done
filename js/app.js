// USER SHOULD BE ABLE TO ADD A TODO TO LIST (X)
// USER SHOULBE BE ABLE TO MARK A TODO AS COMPLETE
// USER SHOULD BE ABLE TO SEE WHAT DAY TODO LIST IS FOR (X)
// USER SHOULD BE ABLE TO EDIT A TODO
// USER SHOULD BE ABLE TO DELETE A TODO

const currentDay = document.querySelector('p');
const addTodoBtn = document.querySelector('a');

currentDay.textContent = showCurrentDay();


function showCurrentDay(month, date, year) {
  const today = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  // Retrieve data about current day
  month = months[today.getMonth()];
  date = today.getDate();
  year = today.getFullYear();
  // Format Date
  return `${month} ${date} ${year}`;
}


// displays the text field for user to input todo item
function addTodo() {
  const todoField = document.querySelector('div.input-field');
  const input = todoField.querySelector('input');
  let userTodo;
  todoField.style.display = 'block';

  // Inserts userTodo onto todo card
  function displayUserTodo() {
    const parentNode = document.querySelector('.todos');
    // create todo item elements
    const li = document.createElement('li');
    const i = document.createElement('i');
    // structure todo item 
    i.className = 'custom-material-icons material-icons';
    i.innerHTML = 'radio_button_unchecked';
    li.className = 'align-vertical';
    li.innerHTML = `${userTodo}`;
    // add todo to todo card
    li.prepend(i);
    parentNode.append(li);
  }
  
  // Waits for user to hit "enter key"
  input.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      userTodo = input.value;
      if (userTodo !== "") {
        todoField.style.display = 'none';
        input.value = "";
        displayUserTodo();
      }
    }
  });
}


addTodoBtn.addEventListener('click', addTodo);
