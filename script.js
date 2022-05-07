
const box_add = document.querySelector('.box_add');
const circle_add = document.querySelector('.circle');
const text_status_in = document.querySelector('.status_text');
let box = document.querySelectorAll('.box');

function start_create(){
    /* let add_val = document.querySelector('.box_text_add').value
    let new_text = add_val
    create(new_text) */

    fetch('add.php')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
}

/* function create(new_text){
    const sections = document.querySelector('.task');

    let div = document.createElement('div');
    div.classList.add('box_task')
    div.classList.add('box')
    sections.appendChild(div);

    let circle = document.createElement('div')
    circle.classList.add('circle')
    circle.classList.add('circle_all')
    div.appendChild(circle);

    let p = document.createElement('p')
    p.classList.add('box_task_text')
    div.appendChild(p);

    let img = document.createElement('img')
    img.classList.add('tchek')
    circle.appendChild(img)
    img.src = "complete.png"

    let text = document.createTextNode(new_text)
    p.appendChild(text);

    return box = document.querySelectorAll('.box');
} */

box.forEach(element => {

    element.addEventListener('click', ()=>{

        if (element.childNodes[2].nextElementSibling.style.textDecoration == "line-through") {
            element.childNodes[2].nextElementSibling.style.textDecoration = "none";
            element.childNodes[2].nextElementSibling.style.color = "";
            create_tchek(element)
        } else {
            element.childNodes[2].nextElementSibling.style.textDecoration = "line-through";
            element.childNodes[2].nextElementSibling.style.color = "var(--color_opac)";
            create_tchek(element)
        }
        status_rest(text_status_in)
    })
})

function create_tchek(element){

    let img_src = element.childNodes[1].firstChild;

    if (img_src.classList.contains("tchek_block")) {
        element.childNodes[1].classList.add('circle_all');
        element.childNodes[1].classList.add('circle');
        element.childNodes[1].classList.remove('tchek_new');
        img_src.classList.remove('tchek_block');
        img_src.classList.add('tchek');
    } else {
        element.childNodes[1].classList.remove('circle_all');
        element.childNodes[1].classList.remove('circle');
        element.childNodes[1].classList.add('tchek_new');
        img_src.classList.remove('tchek');
        img_src.classList.add('tchek_block');
    }
}

/* status */

window.addEventListener('load', ()=>{
    status_rest(text_status_in)
})

function status_rest(text_status_in){
    const tchek = document.querySelectorAll('.tchek')
    let tchek_not = tchek.length
    console.log(tchek_not);
    text_status_in.firstChild.nodeValue = tchek_not + " tâches restantes";
}

/* trois bouttons */

const all = document.querySelector('.all')
const actually = document.querySelector('.actually')
const finish = document.querySelector('.finish')

all.addEventListener('click', ()=>{
    task_all()
})
actually.addEventListener('click', ()=>{
    task_load()
})
finish.addEventListener('click', ()=>{
    task_finish()
})

function task_load(){
    const tchek = document.querySelectorAll('.tchek_block')
    box = document.querySelectorAll('.box')
    for (let index = 0; index < tchek.length; index++) {
        tchek[index];
        if (tchek.classList.contains(".tchek_block")) {
            box.style.display = "none"
        } else {
            box.style.display = "block"
        }
    }
}
function task_finish(){
    const tchek_block = document.querySelectorAll('.tchek')
    for (let index = 0; index < tchek_block.length; index++) {
        tchek_block[index];
        if (tchek_block[index].classList.contains(".tchek")) {
            box.style.display = "none"
        } else {
            box.style.display = "block"
        }
    }
}
function task_all(){
    const tchek = document.querySelectorAll('.tchek')
    const tchek_block = document.querySelectorAll('.tchek_block')
    for (let index = 0; index < tchek.length; index++) {
        tchek[index];
    }
    for (let index = 0; index < tchek_block.length; index++) {
        tchek_block[index];
    }
    if ((tchek_block[index].classList.contains(".tchek") && tchek[index].classList.contains(".tchek_block"))) {
        box.style.display = "none"
        box.style.display = "none"
    } else {
        box.style.display = "block"
        box.style.display = "block"
    }
}

document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {

        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'grab';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }
  
    function handleDragEnd(e) {
  
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
  
    function handleDragOver(e) {
      e.preventDefault();
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }

    function handleDrop(e) {
        e.stopPropagation();
        console.log(this);
        console.log(dragSrcEl);
        console.log(e.dataTransfer.getData('text/html'));
      
        if (dragSrcEl.innerHTML !== this) {
            dragSrcEl.innerHTML = this.innerHTML
          this.innerHTML = e.dataTransfer.getData('text/html');
        }
      
        return false;
    }
  
    let items = document.querySelectorAll('.box');
    items.forEach(function(item) {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragover', handleDragOver);
      item.addEventListener('dragenter', handleDragEnter);
      item.addEventListener('dragleave', handleDragLeave);
      item.addEventListener('dragend', handleDragEnd);
      item.addEventListener('drop', handleDrop);
    });

});