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
//let divider = document.querySelector("#divider");

let todos = [];
let allTodos = [];
let active = [];


radio.addEventListener('click', () => {
    todos.push(input.value);
    allTodos.push(input.value);
    localStorage.setItem('todos',JSON.stringify(todos));
    localStorage.setItem('alltodos',JSON.stringify(allTodos))

    addTodo(input.value);
    input.value = '';
    //radio.checked = false;
})

function addTodo(todo){
    let para = document.createElement('p')
    para.innerText = todo
    para.id = "todoPara";
    createRadiobutton();
    divider.appendChild(para)
    let line = document.createElement('hr')
    divider.appendChild(line);
}
var radioBtn;
function createRadiobutton(){
    radioBtn = document.createElement("INPUT");
    radioBtn.type = "radio";
    divider.appendChild(radioBtn);
    radioBtn.style.paddingTop = "200pradioBtn";
    radioBtn.style.width = "20px";
    radioBtn.style.height = "20px";
    radioBtn.style.position="absolute";
}
Clear.addEventListener('click',(e) => {
    e.preventDefault();
    list.removeChild(list.firstElementChild);
    removeTodo(todos);
})

function removeTodo(todo){
    //let index = todos.indexof(todo);
    while(todo.length > 0){
        todo.pop();
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}

All.addEventListener('click',(e) => {
    e.preventDefault();
    allTodos.map((elements) => {
        addTodo(elements);
    })
})
/*let radioBtn = document.getElementById("radioBtn");*/

radioBtn.addEventListener('click', () => {
    var index;
    let nextPara = radioBtn.nextElementSibling.value;
    push.Active(nextPara);
    index = todos.indexOf(nextPara);
    todos.splice(index,1);
})

