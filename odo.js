let input = document.getElementById("todoInput");
let list = document.getElementById("noofList");
let All = document.getElementById('all');
let Active = document.getElementById('active');
let Completed = document.getElementById('complete');
let Clear = document.getElementById('clear');
let add = document.getElementById("add");
let first = document.querySelector("#first");
let buttons = document.getElementById("buttons");
let radio = document.querySelector(".inputRadio");

//let todoPara = document.querySelector("#todoPara");
let divider = document.querySelector("#divider");

let todos = [];
let allTodos = [];
let complete = [];


radio.addEventListener('click', () => {
    todos.push(input.value);
    allTodos.push(input.value);
    localStorage.setItem('allTodos',JSON.stringify(allTodos))
    localStorage.setItem('todos',JSON.stringify(allTodos))

    addTodo(input.value);
    input.value = '';
})

function addTodo(todo){
    let para = document.createElement('p')
    para.innerText = todo
    para.id = "todoPara";
    let div = document.createElement("div");
    divider.appendChild(div)
    createRadiobutton();
    div.appendChild(para);
    let line = document.createElement('hr');
    div.appendChild(line);

    var radioBtn;
function createRadiobutton(){
    radioBtn = document.createElement("INPUT");
    radioBtn.type = "radio";
    div.appendChild(radioBtn);
    radioBtn.style.paddingTop = "200pradioBtn";
    radioBtn.style.width = "20px";
    radioBtn.style.height = "20px";
    radioBtn.style.position="absolute";

    radioBtn.addEventListener('click', () => {
        var index;
        let nextPara = radioBtn.nextSibling.innerHTML;
        complete.push(nextPara);
        localStorage.setItem("complete",JSON.stringify(complete));
        index = todos.indexOf(nextPara);
        todos.splice(index,1);
        localStorage.setItem("todos",JSON.stringify(todos));

        let parent = radioBtn.parentElement;
        parent.remove();
    })
}
}

function removeTodo(todo){
    //let index = todos.indexof(todo);
    while(todo.length > 0){
        todo.pop();
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}

All.addEventListener('click',(e) => {
    e.preventDefault();
    /*divider.remove();
    let divider = document.createElement("div");*/ 
    complete.map((elements) => {
        addTodo(elements);
    })
})

Active.addEventListener("click", (e) => {
    e.preventDefault();
    //removeAllChild(divider);
    //console.log(divider.firstChild)
    while(divider.firstChild){
        divider.removeChild(divider.firstChild) 
    }
    todos.map((elements) => {
        addTodo(elements);
    })
})
Completed.addEventListener("click", () => {
    /*while(divider.firstChild){
        divider.removeChild(divider.firstChild) 
    }*/
    divider.innerHTML = '';
    complete.map((elements) => {
        addTodo(elements);
    })
})
Clear.addEventListener('click',(e) => {
    e.preventDefault();
    list.removeChild(list.firstElementChild);
    removeTodo(todos);
    localStorage.removeItem("allTodos");
    localStorage.removeItem("todos");
    localStorage.removeItem("complete");

})

/*let removeAllChild = (divider) => {
    while(divider.childNodes){
        divider.removeChild(divider.firstChild) 
    }
}*/



