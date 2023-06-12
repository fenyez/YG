let city = ["moldawia", "krakow", "macedonia", "elo", "siemanooo"];

function userPick(){
    const inputElement = document.querySelector('.js-inputElement');
    let cityPick = (inputElement.value);
    console.log(cityPick);

    var matchFound = false;

    for(let i = 0; i <city.length; i++){
        if(city[i] === cityPick) {
            matchFound = true;
            alert("Great");
            break;
        } 
        
    }   if (matchFound === false) {
        alert("nie");
    }
}






