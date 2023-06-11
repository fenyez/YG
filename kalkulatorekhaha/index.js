
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

function reset() {
    document.getElementById('input').value = '';
}


function backspace() {
    document.getElementById('input').value = document.getElementById('input').value.slice(0 , -1);
}




/*submit.addEventListener('click' ()=>{
    let input = document.getElementById("input");
    number =  num1.value;
    input.value +=number;
})
*/

