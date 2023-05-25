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

    todos.textContent = "To-Do's";
    projects.textContent = "Projects";
    addBtn.textContent = "+";

    content.append(header, sideBar, mainDiv); 
    sideBar.append(todos, projects, addBtn) ;
}
export {pageLoad};