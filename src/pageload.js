
import {makeTask, toDosList} from "/src/to-dos.js";


const pageLoad = () => {
    let content = document.getElementById("content");
    let header = document.createElement("div");
    let sideBar = document.createElement("div");
    let mainDiv = document.createElement("div");
    let todos = document.createElement("ul");
    let projects = document.createElement("ul");
    let addBtn = document.createElement("button");
    
    
    header.className="header";
    sideBar.className = "side-bar";
    mainDiv.className = "main-div";



    mainDiv.setAttribute("id", "main-div");


    todos.textContent = "To-Do's";
    projects.textContent = "Projects";
    addBtn.textContent = "+";

    content.append(header, sideBar, mainDiv); 
    sideBar.append(todos, projects, addBtn) ;




    const removeForm = ()=>{
        let form = document.getElementById("add-form");
        let titleInput = document.getElementById("title");
        let descriptionInput = document.getElementById("description");
        let dueDateInput = document.getElementById("due-date");
        let priorityInput = document.getElementById("priority");
        let submitForm = document.getElementById("submit-form");

        form.remove();
        titleInput.remove();
        descriptionInput.remove();
        dueDateInput.remove();
        priorityInput.remove();
        submitForm.remove();
        
        form.reset();
    }



    const renderForm = () =>{
        let form = document.createElement("form");
        let titleInput = document.createElement("input");
        let descriptionInput = document.createElement("input");
        let dueDateInput = document.createElement("input");
        let priorityInput = document.createElement("div");
        let lowPriority = document.createElement("input");
        let mediumPriority = document.createElement("input");
        let highPriority = document.createElement("input");
        let submitForm = document.createElement("input");

        titleInput.placeholder = "Title";
        descriptionInput.placeholder = "Details";
        dueDateInput.placeholder = "Due Date";
        priorityInput.placeholder = "Priority";
        submitForm.textContent = "Submit";
        submitForm.type ="submit";

        lowPriority.type = "radio";
        mediumPriority.type = "radio";
        highPriority.type = "radio";

    
        

        form.setAttribute("id", "add-form");
        titleInput.setAttribute("id", "title");
        descriptionInput.setAttribute("id", "description");
        dueDateInput.setAttribute("id", "due-date");
        priorityInput.setAttribute("id", "priority");
        submitForm.setAttribute("id", "submit-form");

        mainDiv.append(form);
        form.append(titleInput,descriptionInput,dueDateInput,priorityInput,submitForm);
        priority.append(lowPriority, mediumPriority, highPriority);
        form.addEventListener('submit', function(){
            event.preventDefault();
            makeTask();
            removeForm();
         });

        
    };
    addBtn.addEventListener('click', renderForm);
    

};



function appendTask() {
    for (let i =0; i<toDosList.length; i++){
        let toDo = toDosList[i];

        let toDoEl = document.createElement("div");
        let title = document.createElement("div");
        let details = document.createElement("div");
        let due = document.createElement("div")
        let priority = document.createElement("div");
        let doneBtn = document.createElement("button")


        toDoEl.className = "todo";
        title.textContent = toDo.title;
        details.textContent = toDo.details;
        due.textContent = toDo.due;
        priority.textContent = toDo.priority
        doneBtn.type = "toggle";

        title.className = "title";
        details.className = "description";
        due.className = "due-date";
        priority.className = "priority";

        let mainDiv = document.querySelector("#main-div");
        toDoEl.append(title, details, due, priority, doneBtn);
        mainDiv.appendChild(toDoEl);
    }

};

const removeToDo = () =>{
    $(".todo").remove()
}

 








export {pageLoad, appendTask, removeToDo};
