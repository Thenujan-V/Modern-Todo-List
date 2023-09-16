let input = document.getElementById("todoInput");
let list = document.getElementById("noofList");
let All = document.getElementById('all');
let Active = document.getElementById('active');
let Completed = document.getElementById('complete');
let Clear = document.getElementById('clear');
let add = document.getElementById("add");
let NoOfTodos = document.querySelector("#first");
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

    input.classList.remove("todoInput");
    addTodo(input.value);
    input.value = '';
    radio.checked = false;
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

    if(todo === ''){
        let lastElement = divider.lastChild;
        lastElement.remove();
        input.classList.add("todoInput");
    }
    let dividerHeight = divider.offsetHeight;
    console.log(dividerHeight);
    if(dividerHeight > 350){
    list.classList.add('noofList');
    }

    let count = divider.childElementCount;
    let todosCount = '';
    todosCount = `<p>Count Of Todos : ${count}</p>`;
    NoOfTodos.innerHTML = todosCount;

    var radioBtn;
function createRadiobutton(){
    radioBtn = document.createElement("INPUT");
    radioBtn.type = "radio";
    div.appendChild(radioBtn);
    radioBtn.id = "radioBtn";
    

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
All.addEventListener('click',(e) => {
    e.preventDefault();
    divider.innerHTML = ''; 
    allTodos.map((elements) => {
        addTodo(elements);
    })
    input.classList.remove("todoInput");

    let count = divider.childElementCount;
    let todosCount = '';
    todosCount = `<p>All Todos : ${count}</p>`;
    NoOfTodos.innerHTML = todosCount;
})

Active.addEventListener("click", (e) => {
    e.preventDefault();
    while(divider.firstChild){
        divider.removeChild(divider.firstChild) 
    }
    todos.map((elements) => {
        addTodo(elements);
    })
    input.classList.remove("todoInput");
    let count = divider.childElementCount;
    let todosCount = '';
    todosCount = `<p>Active Todos : ${count}</p>`;
    NoOfTodos.innerHTML = todosCount;
})
Completed.addEventListener("click", () => {
    
    divider.innerHTML = '';
    complete.map((elements) => {
        addTodo(elements);
    })
    /*let radioNodes = divider.getElementsByTagName("input");
    console.log(radioNodes)
    radioNodes.checked = true;*/
    input.classList.remove("todoInput");
    let count = divider.childElementCount;
    let todosCount = '';
    todosCount = `<p>Completed Todos : ${count}</p>`;
    NoOfTodos.innerHTML = todosCount;
})
Clear.addEventListener('click',(e) => {
    e.preventDefault();
    removeTodo(todos);
    removeTodo(allTodos);
    removeTodo(complete);
    divider.innerHTML = ""

    console.log(todos);

    let todosCount = '';
    todosCount = `<p>Count Of Todos : 0</p>`;
    NoOfTodos.innerHTML = todosCount;

    localStorage.setItem("allTodos",JSON.stringify(allTodos));
    localStorage.setItem("todos",JSON.stringify(todos));
    localStorage.setItem("complete",JSON.stringify(complete));

})
function removeTodo(todo){
    while(todo.length = 0){
        todo.shift();
    }
}


