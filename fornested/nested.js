


var number1 = ["1","2","3","4","5","6","7","8","9","0"];
var number2 = ["1","2","3","4","5","6","7","8","9","0"];
var number3 = ["1","2","3","4","5","6","7","8","9","0"];
var number4 = ["1","2","3","4","5","6","7","8","9","0"];
var codes = [];

for (var i = 0; i < number1.length; i++) {
    for (var j = 0; j < number2.length; j++) {
        for (var k = 0; k < number3.length; k++) {
            for (var l = 0; l < number4.length; l++) {
                codes.push(number1[i] + number2[j] + number3[k] + number4[l]);
            }
        }
    }
    
}






function pralinkaButton() {
  document.getElementById('js-namesElement')
  .innerHTML = (Math.floor(Math.random() * codes.length))  ;
}


