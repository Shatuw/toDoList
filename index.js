
// quote changes each time page reloads
const quotes = [
    "It's not that I'm so smart, it's just that I stay with problems longer. &nbsp;&nbsp;- Albert Einstein",  
    "The only way to do great work is to love what you do. &nbsp;&nbsp;- Steve Jobs",  
    "You miss 100% of the shots you don't take. &nbsp;&nbsp;- Wayne Gretzky",  
    "Believe you can and you're halfway there. &nbsp;&nbsp;- Theodore Roosevelt",  
    "Success is not final, failure is not fatal: It is the courage to continue that counts. &nbsp;&nbsp;- Winston S. Churchill",
    "Life is 10% what happens to us and 90% how we react to it. &nbsp;&nbsp;- Charles R. Swindoll",
    "Innovation distinguishes between a leader and a follower. &nbsp;&nbsp;- Steve Jobs",
    "The best way to predict the future is to invent it. &nbsp;&nbsp;- Alan Kay"
];

function displayRandomQuote() {
    const quoteElement = document.querySelector('.inspo-quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerHTML = quotes[randomIndex];
}
displayRandomQuote();

// adding a new task
function funcAddNewTask() {
    const taskList = document.getElementById("taskList"); // get UL-Position
    const userInput = document.getElementById("newTask").value; // get User-Input

  if (userInput != ''){ //testing if empty input-field
    
    // Create a new list item and set its text content to the user's input
    let newTaskItem = document.createElement("li");
    let taskText = document.createElement("span"); // create a span for the task text
    taskText.textContent = userInput;
    newTaskItem.appendChild(taskText);

    // Clear the input field
    document.getElementById("newTask").value = "";

    // button to remove the task
    let removeButton = document.createElement("button");
    let icon2 = document.createElement("i");
    icon2.className = "fas fa-xmark"; // fa classes for the x icon
    removeButton.appendChild(icon2);
    removeButton.onclick = removeTask
    newTaskItem.appendChild(removeButton);
    function removeTask() {
        taskList.removeChild(newTaskItem);
    };
    
    // button to mark the task as complete
    let completeButton = document.createElement("button");
    let icon1 = document.createElement("i");
    icon1.className = "fas fa-check"; // fa classes for the check icon
    completeButton.appendChild(icon1);
    newTaskItem.appendChild(completeButton);
    completeButton.onclick = function() {
        newTaskItem.classList.add("completed");
        taskList.appendChild(newTaskItem); // Move the completed task to the bottom of the list
        removeButton.style.display = "inline"; // Show the remove button
        editButton.style.display = "inline"; // Show the remove button
    };

    // button to edit the task
    let editButton = document.createElement("button");
    let icon3 = document.createElement("i");
    icon3.className = "fas fa-pencil"; // fa classes for the pencil icon
    editButton.appendChild(icon3);
    newTaskItem.appendChild(editButton);
    editButton.onclick = function() {
        // Display the task text in the input field (without the text from the butttons)
        document.getElementById("newTask").value = taskText.textContent;
        // Remove the task item from the list
        taskList.removeChild(newTaskItem);
    };
 
    // Add a class to the task text span
    taskText.classList.add("task-text");

    // Insert the new task item at the top of the task list
    taskList.insertBefore(newTaskItem, taskList.firstChild);     
  }

  // simulate a click event on the submit button - add event listener to the input field. the DOMContentLoaded event ensures that the necessary elements have been loaded before they are manipulated.
  document.addEventListener('DOMContentLoaded', () => { 
    const inputField = document.getElementById('newTask');
    const submitButton = document.getElementById('addNewTask');
    inputField.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        submitButton.click();
      }
    });
  });

};//End of funcAddNewTask


// store Tasks in/from "LocalStorage": 
const saveListBtn = document.getElementById('saveListBtn'); // get the save-Button DOM-node

saveListBtn.addEventListener('click', () => {

  const taskList = document.getElementById('taskList');//get the parent-todo-List-container-node
  let todoNodeList = taskList.children;
  //console.log(todoNodeList);
  let listArray = Array.from(todoNodeList);
  console.log(listArray);

  for (let i=0; i<listArray.length; i++)
    {
    listArray[i] = listArray[i].innerText;
  }
   // console.log(listArray); //just for testing if Array contains 
   localStorage.setItem('myToDoList_key', JSON.stringify(listArray));
});

//check for something stored in localStorage when loading the page
window.onload = () => {
  let getMyStoredList = JSON.parse(localStorage.getItem('myToDoList_key'));
  if (getMyStoredList != null){
    console.log(getMyStoredList);
    
    //now iterating through localStorage-Array:
    for (let i=0; i< getMyStoredList.length; i++){
        // ok, here comes bad-coding by copy-paste the body of funcAddNewTask to here
        //with the minor change that user-input is changed to getMyStoredList[i] - sry ^^
        
          // Create a new list item and set its text content to the user's input
          let newTaskItem = document.createElement("li");
          console.log(newTaskItem);
          let taskText = document.createElement("span"); // create a span for the task text
          taskText.textContent = getMyStoredList[i];
          newTaskItem.appendChild(taskText);
          
          // button to mark the task as complete
          let completeButton = document.createElement("button");
          let icon1 = document.createElement("i");
          icon1.className = "fas fa-check"; // fa classes for the check icon
          completeButton.appendChild(icon1);
          completeButton.onclick = function() {
              newTaskItem.classList.add("completed");
              taskList.appendChild(newTaskItem); // Move the completed task to the bottom of the list
              removeButton.style.display = "inline"; // Show the remove button
              editButton.style.display = "inline"; // Show the remove button
          };
          newTaskItem.appendChild(completeButton);

          // button to remove the task
          let removeButton = document.createElement("button");
          let icon2 = document.createElement("i");
          icon2.className = "fas fa-xmark"; // fa classes for the x icon
          removeButton.appendChild(icon2);
          removeButton.onclick = function() {
              taskList.removeChild(newTaskItem);
          };
          newTaskItem.appendChild(removeButton);

          // button to edit the task
          let editButton = document.createElement("button");
          let icon3 = document.createElement("i");
          icon3.className = "fas fa-pencil"; // fa classes for the pencil icon
          editButton.appendChild(icon3);
          editButton.onclick = function() {
              // Display the task text in the input field (without the text from the butttons)
              document.getElementById("newTask").value = taskText.textContent;
              // Remove the task item from the list
              taskList.removeChild(newTaskItem);
          };
          newTaskItem.appendChild(editButton);
          
          // Add a class to the task text span
          taskText.classList.add("task-text");

          // Insert the new task item at the top of the task list
          taskList.insertBefore(newTaskItem, taskList.firstChild);     
          };
  }
  else {
    console.log('There is nothing in localStorage to load from.')
  };
}

// clear all localStorage
const clearAllBtn = document.querySelector('#clearAllBtn');
clearAllBtn.addEventListener("click", () => {
  localStorage.clear();
  console.log("localStorage is cleared!");
});





