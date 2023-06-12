let body = document.querySelector("body");
let DarkMode = document.getElementById("DarkMode");
let input = document.getElementById("input");
const tasksList = [];








function inputValue(){
   let value = input.value;
   tasksList.push(value);
   console.log(value);
   let listaHTML = '';
   for(let i = 0; i < tasksList.length; i++){
      console.log(tasksList[i]); 
      const lista = tasksList[i];
      const html = `<p>${lista}</p> `
      listaHTML += html; 
      console.log(listaHTML);
      document.querySelector(".task").innerHTML = listaHTML;
   }
   
   }

   
   


  








   
   


   






DarkMode.addEventListener('click', () => {
   if( body.style.backgroundColor === "white"){
    body.style.backgroundColor = "black";
    body.style.color = "white";
   }else( body.style.backgroundColor = "white",
   body.style.color = "black")
} );