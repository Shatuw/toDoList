function funcAddNewTask() {
    // take Input (maybe proof it if its empty) an write it underneath <form>
   
    //First: take inputfield into an variable..
   
    let userInput = document.getElementById("newTask").value;
    // console.log("Hello test " + userInput);
    if (userInput == ""){
        alert("Please insert a Task");
    }
    else {
    //second: put it into an extra-HTML/CSS Text-Block (as variable)
        let outputTask = "<p> ToDo:" + userInput + "</p>";

    }
    
   
    //third: write the whole thing onto the page

    //fourth clear the inputfield
    let inputClear = document.querySelector('addNewTask');
    let inputField = document.querySelector('newTask');

    inputClear.addEventListener('click', () => {
        inputField.forEach(newTask => i)
    });
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