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

let todoPara = document.querySelector("#todoPara");
let divider = document.querySelector("#divider");

let todos = []



radio.addEventListener('click', () => {
    /*todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))*/
    addTodo(input.value);
    let line = document.createElement('hr')
    divider.appendChild(line)
    input.value = ''
    //radio.checked = false;
})
function addTodo(todo){
    let para = document.createElement('p')
    para.innerText = todo
    //list.appendChild(para)
    para.id = "todoPara";
    createRadiobutton();
    divider.appendChild(para)
}

function createRadiobutton(){
    var x = document.createElement("INPUT");
    x.type = "radio";
    divider.appendChild(x)
    x.style.paddingTop = "200px";
    x.style.width = "20px";
    x.style.height = "20px";
    x.style.position="absolute";
}
Clear.addEventListener('click',(e) => {
    e.preventDefault();
    list.removeChild(list.firstElementChild);
})