
function funcAddNewTask() {
    const taskList = document.getElementById("taskList");
    const userInput = document.getElementById("newTask").value;

    // Create a new list item and set its text content to the user's input
    let newTaskItem = document.createElement("li");
    newTaskItem.textContent = userInput;

    // Clear the input field
    document.getElementById("newTask").value = "";

    // button to mark the task as complete
    let completeButton = document.createElement("button");
    completeButton.textContent = "Done";
    completeButton.onclick = function() {
    newTaskItem.classList.add("completed");
    taskList.appendChild(newTaskItem); // Move the completed task to the bottom of the list
    };

    // button to remove the task
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
    taskList.removeChild(newTaskItem);
    };
  
    // button to edit the task
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        // Display the task text in the input field (without the text from the butttons)
        document.getElementById("newTask").value = newTaskItem.childNodes[0].textContent;
        // Remove the task item from the list
        taskList.removeChild(newTaskItem);
    };
    
    // Add the buttons to the new task item
    newTaskItem.appendChild(completeButton);
    newTaskItem.appendChild(removeButton);
    newTaskItem.appendChild(editButton);


    // Insert the new task item at the top of the task list
    taskList.insertBefore(newTaskItem, taskList.firstChild);

}




