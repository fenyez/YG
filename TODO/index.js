const submit = document.getElementById("submit");
let input = document.getElementById("input");
let tasksList = [];


function addElement(){
    let input = document.getElementById('input');
    task = input.value;
    tasksList.push(task);
    console.log(task);
    
}


listHTML = '';

submit.addEventListener('click', ()=> {
    let input = document.getElementById('input');
    value = input.value;
    tasksList.push(value);
 
    tasksList.forEach(task => {
        html = `<p>${value}</p>`;
        console.log(html);
        listHTML += html;

    })

    document.querySelector(".task").innerHTML = listHTML;
    
});

