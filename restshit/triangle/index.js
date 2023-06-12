let a;
let b;
let c;
let submit = document.getElementById('submit');
let result = document.querySelector('.result');
let inputA = document.getElementById('inputa');
let inputB = document.getElementById('inputb');



inputA.addEventListener('input', updateResult);
inputB.addEventListener('input', updateResult);


function updateResult(){
        a = Number(document.getElementById('inputa').value);
        b = Number(document.getElementById('inputb').value);
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        document.querySelector('.result').innerText = `C = ${c}`;
    
        console.log(c);
}

