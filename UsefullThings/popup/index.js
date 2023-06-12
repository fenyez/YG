const popup = document.querySelector('.popup');
const close = document.getElementById('close');
const overlay = document.querySelector('.overlay');



function openpop(){
    popup.classList.add('active');
    overlay.classList.add('active');
}


close.addEventListener('click', ()=> {
    popup.classList.remove('active')
    overlay.classList.remove('active')
})
    

