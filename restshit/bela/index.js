let x;
let y ;
let z ;


document.getElementById("reset").onclick = function() {
   x = Math.floor(Math.random() *6) +1;
   y = Math.floor(Math.random() *6) +1;
   z = Math.floor(Math.random() *6) +1; 

   document.getElementById("xl").innerHTML = x
   document.getElementById("yl").innerHTML = y
   document.getElementById("zl").innerHTML = z

}