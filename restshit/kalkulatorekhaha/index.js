
let operators = ['+','-','*','/','.'];

function addToDisplay(number) {
    let value = document.getElementById('input').value;

    let lastChar = value.slice(-1);

   
    if(operators.includes(lastChar) && operators.includes(number)) {
        return false;
    }

    if (value === '' && number === operators.includes(number)) {
        return false;   
      }
    
    value += number;
    document.getElementById('input').value = value;
};




function calculation(){
    document.getElementById('input').value = eval(document.getElementById('input').value);
   
}
function procent(){
    document.getElementById('input').value = eval(document.getElementById('input').value /100);
   
}

function reset() {
    document.getElementById('input').value = '';
}


function backspace() {
    document.getElementById('input').value = document.getElementById('input').value.slice(0 , -1);
}
let checkbox = document.querySelector('.check');

checkbox.addEventListener('change', () => {
    let body = document.querySelector('.body');
    let container = document.querySelector('.container');
    if(checkbox.checked === false){
        body.style.backgroundColor = '#f9fcff';
        body.style.backgroundImage = "linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)";
        container.style.backgroundColor = '#D9D9D9';
        body.style.color = 'black';
    }else {body.style.backgroundColor = "#2b4162"
            body.style.backgroundImage = "linear-gradient(315deg, #2b4162 0%, #12100e 74%)";
            container.style.backgroundColor = 'black';
            body.style.color = 'white';
        };
            
        });


/*submit.addEventListener('click' ()=>{
    let input = document.getElementById("input");
    number =  num1.value;
    input.value +=number;
})
*/

