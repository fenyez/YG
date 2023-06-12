let siemka = Math.floor(Math.random() * 10)+1;
console.log(siemka);



var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();

var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));


let elo = new Date("December 5,2023").getTime() - new Date().getTime(); 

let siema = Math.floor(elo / (1000 * 60 * 60 * 24));



console.log(siema);
console.log(daysTillDoom);


// Apka która przypomina o urodzinach bliskich.
// Wpisujesz zainteresowania danej osoby i apka wysyła ci promocję na produkty w okolicy tej daty



const button = document.querySelector('button');

d = new Date();

d.setMonth(11);

console.log(d);


function toggle(){
    button.classList.toggle('altColor')
}

button.addEventListener('click',toggle);


function popout(){
    alert("Uwaga UWaga MiLF w OKOLICyy!!!")
}

setTimeout(popout, 5000,10000,13000,14000)

function calcTot(merchTot) {
    var orderTot;
    if (merchTot >= 100) {
      orderTot = merchTot;
    } else if (merchTot < 50.01) {
      orderTot = merchTot + 5;
    } else {
      orderTot = merchTot + 5 + (.03 * (merchTot - 50));
    }
    return orderTot;
  }

