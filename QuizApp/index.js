
const radioAnswer = document.querySelectorAll(".answer");
const submit = document.getElementById('sendButton');

 const dataBase = [
        {
          pytanie: "XxxxVII-wieczna seria konfliktów między Ligą Katolicką a Unią Protestancką trwała:",
          a: '10 lat',
          b: '30 lat',
          c: '50 lat',
          d: '100 lat',
          answer: 'b'
        },
        {
          pytanie: "Kandydat na wysokie stanowisko często nie musi mieć odpowiednich kwalifikacji, o ile ma mocne:",
          a: 'łydki',
          b: 'kolana',
          c: 'plecy',
          d: 'chuja',
          answer: 'c'
        },
        {
            pytanie: "XVII-wieczna seria konfliktów między Ligą Katolicką a Unią Protestancką trwała:",
            a: '10 lat',
            b: '30 lat',
            c: '50 lat',
            d: '100 lat',
            answer: 'b'
          }
      ];
      
     
      randomQuestion()

function randomQuestion() {
    i = Math.floor(Math.random() * dataBase.length );

    document.getElementById("box").innerText = dataBase[i].pytanie;
    document.getElementById("a").innerText = dataBase[i].a;
    document.getElementById("b").innerText = dataBase[i].b;
    document.getElementById("c").innerText = dataBase[i].c;
    document.getElementById("d").innerText = dataBase[i].d;
    //console.log(dataBase[i]);
    //document.getElementById("box").innerHTML = dataBase[i];

}

submit.addEventListener('click', ()=>{
   let checkedAnswer = null;

   radioAnswer.forEach(answer => {
    if(answer.checked) {
      checkedAnswer = answer.value;
      console.log(checkedAnswer);
} else if(checkedAnswer === dataBase[i].answer){
  alert("brawo");
} 
})});
  






    
    //if(selectedOption === "correct" ){

      //  alert("brawo");
    //}








 
//*function answerElement(){
//*    const sendButton = document.getElementById("sendButton");
//*
//*    sendButton.addEventListener('click'  {
//*        const selectedOption = document.querySelector('input[name="huj"]:checked')
//*    }
//*)
//*







