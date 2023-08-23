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


radio.addEventListener('click', () => {
    addTodo(input.value);
    let line = document.createElement('hr')
    list.appendChild(line)
    input.value = ''
    radio.checked = false;
})
function addTodo(todo){
    var x = document.createElement("INPUT");
    x.type = "radio";
    list.appendChild(x)
    x.style.paddingTop = "200px";
    x.style.width = "20px";
    x.style.height = "20px";
    let para = document.createElement('p')
    para.innerText = todo
    list.appendChild(para)
    x.style.position="absolute"
    para.style.paddingLeft = "40px";
    
}
