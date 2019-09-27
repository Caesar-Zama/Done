// USER SHOULD BE ABLE TO ADD A TODO TO LIST (X)
// USER SHOULD BE ABLE TO MARK A TODO AS COMPLETE
// USER SHOULD BE ABLE TO SEE WHAT DAY TODO LIST IS FOR (X)
// USER SHOULD BE ABLE TO EDIT A TODO
// USER SHOULD BE ABLE TO DELETE A TODO

const currentDay = document.querySelector('p');
const addTodoBtn = document.querySelector('a');
const ul = document.querySelector('ul');
console.log(ul);


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
    li.innerHTML = `<span>${userTodo}</span>`;
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

function complete(e) {
  const todoBullet = document.querySelector('i.custom-material-icons.material-icons');
  const todoText = document.querySelector('li.align-vertical');
  // When a todo item is clicked
  if (e.target === todoBullet || e.target === todoText) {
    console.log('completed', e.target);
  }
}



// USER SHOULD BE ABLE TO MARK A TODO AS COMPLETE
  // Need to place an event listener on "ul container" so that I can make the todo items clickable
  // When a todo item is clicked
    // Strike through todo item
    // Fade out text slightly
    // Insert a check mark inside circle bullet






ul.addEventListener('click', complete);

addTodoBtn.addEventListener('click', addTodo);
