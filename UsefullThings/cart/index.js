
let shopingCart = [];
const store = new Map([
    ["spodnie", 140],
    ["tee", 50],
    ["hat", 40],
    ["belt", 220],
    ["shoes", 550]
])

store.set('mosiądz', 500);


store.get('tee');
store.forEach(print);


const belt = document.getElementById('belt');
const tee = document.getElementById('tee');






function shopin(element){
   shopingCart[element] += shopingCart.push(store.get(element));
   console.log(shopin);
   result 
}






console.log(shopingCart);

function print(index , elo){
    console.log(index , elo);
}