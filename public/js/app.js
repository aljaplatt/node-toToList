// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// event listeners
todoButton.addEventListener("click", addToDo);

// functions
function addToDo(event) {
  // prevents form submission
  event.preventDefault();
  //   console.log("hello");
  // create task div - taskDiv
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  // create list item - newTask
  const newTask = document.createElement("li");
  newTask.innerText = "bombaclaart"; // innertext doesnt carry whitespace - web dev simp video
  newTask.classList.add("task-item");
  // append li (newTask) to div
  taskDiv.appendChild(newTask);
  // Add buttons - complete & delete

  // COMPLETE BUTTON
  const completeButton = document.createElement("button");
  // add icon to button - innerHTML??
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  // add class to button
  completeButton.classList.add("complete-btn");
  // append button to the task div
  taskDiv.appendChild(completeButton);

  // DELETE BUTTON
  const deleteButton = document.createElement("button");
  // add icon to button - innerHTML??
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  // add class to button
  deleteButton.classList.add("complete-btn");
  // append button to the task div
  taskDiv.appendChild(deleteButton);
}
