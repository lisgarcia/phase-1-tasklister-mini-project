const taskForm = document.querySelector('#create-task-form')
const tasks = document.querySelector('#tasks')

///adding items to to-dos. 
taskForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = document.querySelector('#new-task-description')
  let inputtedValue = input.value

  let taskItem = document.createElement('li')

  taskItem.textContent=inputtedValue

  tasks.appendChild(taskItem)

})











































// document.addEventListener("DOMContentLoaded", (event) => {});

// const tasks = document.querySelector("#tasks")
// const submitBtn=document.querySelector("#submit")
// const userImput= document.querySelector("#new-task-description")


// function addNewTask (text) {
//   const taskItem= document.createElement("li");
//   const littleBtn =document.createElement("span")
//   littleBtn.classList.add("littleBtn")
//   taskItem.textContent= userImput.value
//   tasks.append(taskItem, littleBtn)
// }

// submitBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   addNewTask()  
// })

// delBtn= document.createElement('button')


//needs: 1. type a task into input field, 
// 2. click submit button
//3. task string input appears in the DOM 
// Utilizes: HTML <form> element, <input> element, 
  // <type> attributes (type="text") and (type="submit")