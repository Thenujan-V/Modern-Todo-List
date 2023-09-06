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

let todos = []



radio.addEventListener('click', () => {
    /*todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))*/
    createRadiobutton();
    addTodo(input.value);
    let line = document.createElement('hr')
    list.appendChild(line)
    input.value = ''
    //radio.checked = false;
})
function addTodo(todo){
    

    let para = document.createElement('p')
    para.innerText = todo
    list.appendChild(para)
    para.id = "todoPara";
    
    
    
}
/*x.addEventListener("click", () => {
        para.style.textdecoration = "overline";
    }*/

function createRadiobutton(){
    var x = document.createElement("INPUT");
    x.type = "radio";
    list.appendChild(x)
    x.style.paddingTop = "200px";
    x.style.width = "20px";
    x.style.height = "20px";
    x.style.position="absolute";
}
Clear.addEventListener('click',(e) => {
    e.preventDefault();
    document.getElementById('todoPara').value = '';
    
})