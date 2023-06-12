/*let area;
let width;
let height;


width = prompt("Enter width");
height = prompt("Enter height");

area = getArea();

console.log(`The area is: ${area}`);

function getArea(){
    return width * height;
}
*/



checkWinner(false);

function checkWinner(gej){
    gej ? console.log('YOu Win') : console.log('jesrme gej');
    
}


let array = ['b1', 'a412','g4g214','r5125','c521'];

array = array.sort().reverse();

for(let nigger of array){
    console.log(nigger);
}


displayDOM('blablabal')






function displayDOM(output){
    document.getElementById('label').innerHTML = output;
}






let grades = [100, 14, 12,512,12,55,1];


grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));





/*grades = grades.sort(sortGrades);

grades.forEach(print);

function sortGrades(x, y){
    return y - x;
}
function sortGrades(x, y){
    return x - y;
}

function print(element){
    console.log(element)
}
*/



let userName = "Elo";
let password = "Jakubssiepale123"
let userInbox = 0;

if(userName === "Elo" && password === "Jakubssiepale123"){
    login();
}

 

function login(){
    
    displayUserName();
    displayUserInbox();
    
    function displayUserName(){
        console.log(`Siema ${userName}`);
    }
    function displayUserInbox(){
        console.log(`Masz ${userInbox} nowych wiadomości`);
    }
};
