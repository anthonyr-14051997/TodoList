
const task = document.querySelector('.task');
/* affichage des box / php */

fetch_add()

function fetch_add(value=false){
    if (value == false) {
        fetch('./php/add.php')
        .then( response => { return response.text() })
        .then(data=>{
    
            task.innerHTML = data;
            box_finish()
            status_rest()
    
            fetch_vue()

            drag_and_drop()
            
        })
    } else {
        const form = new FormData()
        form.append("task_name_value", value)
    
        fetch('./php/add.php', {
            method: "POST",
            body: form
        })
        .then( response => { return response.text() })
        .then(data=>{
    
            task.innerHTML = data;
            box_finish()
            status_rest()
    
            fetch_vue()

            drag_and_drop()
            
        })
    }
}

const box_add = document.querySelector('.box_add');
const circle_add = document.querySelector('.circle');
const all = document.querySelector('.all');
const actually = document.querySelector('.actually');
const finish = document.querySelector('.finish');

function start_create(){
    
    const value_innerit = document.querySelector('.box_text_add')
    const value = document.querySelector('.box_text_add').value
    const task = document.querySelector('.task')

    fetch_add(value)

    value_innerit.value = " "
}

function fetch_vue(){
    fetch('./php/vue.php')
    .then(response => { return response.text() })
    .then(response_data_vue=>{
        let test = response_data_vue.split(" | ")
        for (let index = 0; index < test.length; index++) {
            let data_vue = test[index]
            const box = document.querySelectorAll('.box');
            box.forEach(element => {
                if (element.childNodes[2].nextElementSibling.firstChild.nodeValue == data_vue) {
                    element.childNodes[2].nextElementSibling.style.textDecoration = "line-through";
                    element.childNodes[2].nextElementSibling.style.color = "var(--color_opac)";
                    create_tchek(element, data_vue)
                    status_rest()
                }
            })
        }
        
    })
}

/* rayé les box */

function box_finish(){
    const box = document.querySelectorAll('.box');
    box.forEach(element => {

        element.addEventListener('click', ()=>{

            const form = new FormData()
            form.append("element", element.childNodes[2].nextElementSibling.firstChild.nodeValue)

            fetch('./php/finish.php', {
                method: "POST",
                body: form
            })
            .then( response => { return response.text() })
            .then(data=>{

                fetch_vue()

                if (data == 2) {
                    element.childNodes[2].nextElementSibling.style.textDecoration = "none";
                    element.childNodes[2].nextElementSibling.style.color = "";
                    create_tchek(element, data)
                } else {
                    element.childNodes[2].nextElementSibling.style.textDecoration = "line-through";
                    element.childNodes[2].nextElementSibling.style.color = "var(--color_opac)";
                    create_tchek(element, data)
                }
                status_rest(data)
            })
        })
    })
}



function create_tchek(element, data){

    let img_src = element.childNodes[1].firstChild;
    let etat = data;

    if (img_src.classList.contains("tchek_block") && etat == 2) {
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

function status_rest(data = false){
    if (data == 1) {
        const text_status_in = document.querySelector('.status_text');
        const tchek = document.querySelectorAll('.tchek')
        let tchek_not = tchek.length
        console.log(tchek_not);
        text_status_in.firstChild.nodeValue = tchek_not + " tâches restantes";
    } else if (data == 2) {
        const text_status_in = document.querySelector('.status_text');
        const tchek = document.querySelectorAll('.tchek')
        let tchek_not = tchek.length
        console.log(tchek_not);
        text_status_in.firstChild.nodeValue = tchek_not + " tâches restantes";
    } else {
        const text_status_in = document.querySelector('.status_text');
        const tchek = document.querySelectorAll('.tchek')
        let tchek_not = tchek.length
        console.log(tchek_not);
        text_status_in.firstChild.nodeValue = tchek_not + " tâches restantes";
    }
}

/* trois bouttons */

all.addEventListener('click', ()=>{
    fetch_add()
})

actually.addEventListener('click', ()=>{
    const task = document.querySelector('.task');
    fetch('./php/load.php')
    .then(response => { return response.text() })
    .then(data=>{
        console.log(data);
        task.innerHTML = data
        box_finish()
            status_rest()
    
            fetch_vue()
    })
})

finish.addEventListener('click', ()=>{
    const task = document.querySelector('.task');
    fetch('./php/not_complete.php')
    .then(response => { return response.text() })
    .then(data=>{
        console.log(data);
        task.innerHTML = data
        box_finish()
            status_rest()
    
            fetch_vue()
    })
})


/* drag'n drop */

function drag_and_drop(){

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
}