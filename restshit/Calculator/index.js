


function addToDisplay(number){
   document.getElementById("display").value +=number;

   
}



function calculation() {
    document.getElementById("display").value = eval(display.value);

    if(eval(display.value) === false) {
        alert("zle");
    }

}

function reset() {

   document.getElementById("display").value = '';
}


function removeLastNumber() {

    let displayValue = document.getElementById("display").value;

    document.getElementById("display").value = displayValue.slice(0, -1);

 

}



