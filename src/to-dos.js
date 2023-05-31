import {appendTask, removeTask, pageLoad} from "/src/pageload.js";

class Todo {
    constructor(title, details, due, priority){
        this.title = title;
        this.details = details;
        this.due = due;
        this.priority = priority;
    }
}
// Add button on side nav appends form for new to do
// Add button in form gives option for where to put it (todo or project);
//Creates new object and pushed it to tghe stored library



//todi button displays al things in todo library

//push that new "object" to 

const makeTask = ()=>{
    let count = "";
    let titleValue = document.getElementById("title").value;
    let descriptionValue = document.getElementById("description").value;
    let dueDateValue = document.getElementById("due-date").value;
    let priorityValue = document.getElementById("priority").value

    count = new Todo(titleValue, descriptionValue, dueDateValue, priorityValue);
    toDosList.push(count);
    console.log(toDosList)
     
     appendTask();

    return{toDosList};

};
let toDosList = [];


export {makeTask,toDosList};


