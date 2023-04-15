

function funcAddNewTask() {
    const taskList = document.getElementById("taskList");
    const userInput = document.getElementById("newTask").value;

    // Create a new list item and set its text content to the user's input
    let newTaskItem = document.createElement("li");
    newTaskItem.textContent = userInput;

    // Append the new list item to the task list
    taskList.appendChild(newTaskItem);

    // Clear the input field
    document.getElementById("newTask").value = "";

    // button to mark the task as complete
    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
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
  
    // Append the new list item and buttons to the task list
    newTaskItem.appendChild(completeButton);
    newTaskItem.appendChild(removeButton);
    taskList.appendChild(newTaskItem);



}


function funcMarkAsComplete (){
    //line-through the text of the task
}

function funcChangeTask(){
    // change the text in the safed task
}

function funcDeleteTask(){
    //delete the whohle task from the site
}


