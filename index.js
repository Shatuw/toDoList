
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
}// funcAddNewTask end


// OTHER IDEAS:
// store Tasks in "LocalStorage" 
// hover over all buttons & nav links


