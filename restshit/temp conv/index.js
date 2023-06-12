let input = document.getElementById('input');




input.addEventListener('input', ()=>{
    let print = document.getElementById('label');
    print.innerHTML = input.value;

    if(document.getElementById('cButton').checked ){
        wynikc = Math.round((input.value - 32) * (5/9));
        print.innerHTML = `${wynikc}°C`
    } else if(document.getElementById('fButton').checked){
        wynik = Math.round((input.value * 9/5 + 32));
        print.innerHTML = `${wynik}°F `;
    }
})