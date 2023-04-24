
function funcAddNewTask() {
    const taskList = document.getElementById("taskList"); // get UL-Position
    const userInput = document.getElementById("newTask").value; // get User-Input

if (userInput != ''){
    // Create a new list item and set its text content to the user's input
    let newTaskItem = document.createElement("li");
    let taskText = document.createElement("span"); // create a span for the task text
    taskText.textContent = userInput;
    newTaskItem.appendChild(taskText);

    // Clear the input field
    document.getElementById("newTask").value = "";

    // button to mark the task as complete
    let completeButton = document.createElement("button");
    let icon1 = document.createElement("i");
    icon1.className = "fas fa-check"; // fa classes for the check icon
    completeButton.appendChild(icon1);
    completeButton.onclick = function() {
        newTaskItem.classList.add("completed");
        taskList.appendChild(newTaskItem); // Move the completed task to the bottom of the list
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
    
    // Add the buttons to the new task item
    newTaskItem.appendChild(completeButton);
    newTaskItem.appendChild(editButton);
    newTaskItem.appendChild(removeButton);
 

    // Add a class to the task text span
    taskText.classList.add("task-text");


    // Insert the new task item at the top of the task list
    taskList.insertBefore(newTaskItem, taskList.firstChild);     
}


// // simulate a click event on the submit button - add event listener to the input field	
//the DOMContentLoaded event ensures that the necessary elements have been loaded before they are manipulated
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
 


// empty input field doesnt add a new task
// hover over all buttons & nav links
// daily quotes








