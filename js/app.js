// USER SHOULD BE ABLE TO ADD A TODO TO LIST
// USER SHOULBE BE ABLE TO MARK A TODO AS COMPLETE
// USER SHOULD BE ABLE TO SEE WHAT DAY TODO LIST IS FOR
// USER SHOULD BE ABLE TO EDIT A TODO
// USER SHOULD BE ABLE TO DELETE A TODO

const currentDay = document.querySelector('p');
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



// Model of a todo list
const todoList = {

}