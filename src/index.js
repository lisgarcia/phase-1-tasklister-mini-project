//const { locationInfo } = require("jsdom/lib/jsdom/living/helpers/internal-constants");

document.addEventListener("DOMContentLoaded", (event) => {});

const tasks = document.querySelector("#tasks")
const submitBtn=document.querySelector("#submit")
const userImput= document.querySelector("#new-task-description")


function addNewTask (text) {
  const taskItem= document.createElement("li");
  const littleBtn =document.createElement("span")
  littleBtn.classList.add("littleBtn")
  taskItem.textContent= userImput.value
  tasks.append(taskItem, littleBtn)
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addNewTask()  
})



//needs: 1. type a task into input field, 
// 2. click submit button
//3. task string input appears in the DOM 
// Utilizes: HTML <form> element, <input> element, 
  // <type> attributes (type="text") and (type="submit")