let input = document.getElementById("todoInput");
let list = document.getElementById("noofList");
let All = document.getElementById('all');
let Active = document.getElementById('active');
let Completed = document.getElementById('complete');
let Clear = document.getElementById('clear');
let add = document.getElementById("add");
let first = document.querySelector("#first");
let buttons = document.getElementById("buttons")



add.addEventListener('click', () => {
    let radio = document.createElement('input')
    radio.setAttribute("type","radio")
    list.appendChild(radio)
    radio.style.width = '15px'
   
    
    addTodo(input.value);
    let line = document.createElement('hr')
    list.appendChild(line)
    input.value = ''
    
})
function addTodo(todo){
    let para = document.createElement('p')
    para.innerText = todo
    list.appendChild(para)
}
