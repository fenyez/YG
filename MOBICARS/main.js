const herobtn1 = document.querySelector('.herobtn1');
const section1 = document.querySelector('.pick-car');
const searchbtn = document.getElementById('select5');
const popup = document.querySelector('.popup');
const popupremove = document.querySelector('.popupremove');
const overlay = document.querySelector('.overlay');
const model = document.querySelector('.model');
const marka = document.querySelector('.marka');
const place = document.querySelector('.place');
const date1 = document.querySelector('.date1');
let carimg = document.querySelector('.carimg');


const select = document.getElementById('select');
const select1 = document.getElementById('select1');
const select2 = document.getElementById('select2');
const select3 = document.getElementById('select3');
const select4 = document.getElementById('select4');




const Audi = document.querySelector('.Audi');
const section3img = document.querySelector('.section3img')


herobtn1.addEventListener('click', ()=> {
    section1.scrollIntoView({behavior: 'smooth'});
} );



searchbtn.addEventListener('click', ()=> {
   if(select.value === "Select your car type" || select1.value === "Select your car type"){
    alert('All have to be cho');
   }else{
    popup.classList.add('active');
    overlay.classList.add('active');
   } 
   
   
   
   
   
    
    
} )


popupremove.addEventListener('click', ()=> {
    popup.classList.remove('active');
    overlay.classList.remove('active');
})

select.addEventListener('change', function() {
    const selectedOption = select.selectedOptions[0];
    model.innerHTML =`<strong>Car Model:</strong>  ${selectedOption.value}`;
    if(selectedOption.value === "Audi"){
        carimg.src = "https://www.pngmart.com/files/10/White-Audi-PNG-Photos.png";
    } else if (selectedOption.value === "Mercedes"){
        carimg.src = "mercedes.png";
    } else if (selectedOption.value === "Kia"){
        carimg.src = "Red-Kia-Car-PNG-Transparent-Image.png";
    }
  });

select1.addEventListener('change', function() {
    const selectedOption = select1.selectedOptions[0];
    marka.innerHTML = `<strong>Drop-Off Location:</strong>  ${selectedOption.value}`;
  });
select2.addEventListener('change', function() {
    const selectedOption = select2.selectedOptions[0];
    place.innerHTML = `<strong>Pick up Location:</strong> ${selectedOption.value}`;
  });

select3.addEventListener('change', function() {
    const selectedOption = select3.selectedOptions[0];
    date1.innerHTML = selectedOption.value;
  });



  
Audi.addEventListener('click', ()=> {
  section3img.src = "https://www.pngmart.com/files/10/White-Audi-PNG-Photos.png"
})



