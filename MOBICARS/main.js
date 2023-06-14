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
const Merc = document.querySelector('.Mercedes');
const Kia = document.querySelector('.Kia');
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
        carimg.src = "https://w7.pngwing.com/pngs/655/565/png-transparent-kia-motors-car-2019-kia-sportage-2016-kia-sportage-kia-compact-car-car-subcompact-car.png";
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



  
Audi.addEventListener('click', () => {
    section3img.classList.add('fade-out');
    
    setTimeout(() => {
      section3img.src = "https://www.pngmart.com/files/10/White-Audi-PNG-Photos.png";
      new Car("Audi", "A4", "2014", "4/5", "Manual", "Disel","50$ /rent per day");
      section3img.classList.remove('fade-out');
      section3img.classList.add('fade-in');
    }, 300); 
});
Merc.addEventListener('click', ()=> {
  section3img.classList.add("fade-out");

  setTimeout(()=>{
    section3img.src = "mercedes.png";
     new Car("Mercedes", "Amg","2016","4/5","Manual","Gasoline","40$/rent per day");
    section3img.classList.remove('fade-out')
    section3img.classList.add('fade-in');
  },300)
  
});
Kia.addEventListener('click', ()=> {
  section3img.classList.add("fade-out");

  setTimeout(()=>{
  section3img.src = "https://w7.pngwing.com/pngs/655/565/png-transparent-kia-motors-car-2019-kia-sportage-2016-kia-sportage-kia-compact-car-car-subcompact-car.png";
  new Car("Kia", "P6","2021","4/5","Auto","Electric","35$/rent per day" );
  section3img.classList.remove('fade-out')
  section3img.classList.add('fade-in');
},300)
});



class Car {
  constructor(model, mark, year, doors, transmission, fuel, price){
    Model.innerHTML  = model;
    Mark.innerHTML = mark;
    Year.innerHTML = year;
    Doors.innerHTML = doors;
    Transmission.innerHTML = transmission;
    Fuel.innerHTML = fuel;
    Price.innerHTML = price;
  }

}
let Model = document.querySelector('.Model');
let Mark = document.querySelector('.Mark');
let Year = document.querySelector('.Year');
let Doors = document.querySelector('.Doors');
let Transmission = document.querySelector('.Transmission');
let Fuel = document.querySelector('.Fuel');
let Price = document.querySelector('.Price');

new Car("Audi", "A4", "2014", "4/5", "Manual", "Disel","50$ /rent per day");



const Stick = document.querySelector('.Stick');


Stick.addEventListener('click', ()=> {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})


