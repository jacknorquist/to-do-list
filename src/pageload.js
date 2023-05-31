
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
        let priorityInput = document.createElement("input");
        let submitForm = document.createElement("input");

        titleInput.placeholder = "Title";
        descriptionInput.placeholder = "Details";
        dueDateInput.placeholder = "Due Date";
        priorityInput.placeholder = "Priority";
        submitForm.textContent = "Submit";
        submitForm.type ="submit";
    
        

        form.setAttribute("id", "add-form");
        titleInput.setAttribute("id", "title");
        descriptionInput.setAttribute("id", "description");
        dueDateInput.setAttribute("id", "due-date");
        priorityInput.setAttribute("id", "priority");
        submitForm.setAttribute("id", "submit-form");

        mainDiv.append(form);
        form.append(titleInput,descriptionInput,dueDateInput,priorityInput,submitForm);
        form.addEventListener('submit', function(){
            event.preventDefault();
            makeTask();
            removeForm();
         });

        
    };
    addBtn.addEventListener('click', renderForm);
    

};



function appendTask() {
    for (let i=0; i <= toDosList.length; i++) {
        let title = toDosList[i].title;
        let details = toDosList[i].details;
        let due = toDosList[i].due;
        let priority = toDosList[i].priority;
        let toDoCard = document.createElement("div");
        toDoCard.className = "todo";
        toDoCard.setAttribute("id", title);
        console.log(details);


        let titleDiv = document.createElement("div");
        let detailsDiv = document.createElement("div");
        let dueDiv = document.createElement("div");
        let priorityDiv = document.createElement("div");


        titleDiv.textContent = title;
        detailsDiv.textContent = details;
        dueDiv.textContent = due;
        priorityDiv.textContent = priority;



        titleDiv.className = "title";
        detailsDiv.className = "description";
        dueDiv.className = "due-date";
        priorityDiv.className = "priority";

        let mainDiv = document.getElementById("main-div");
        mainDiv.append(toDoCard);
        toDoCard.append(titleDiv, detailsDiv, dueDiv, priorityDiv);
    };
};
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
 








export {pageLoad, appendTask};
