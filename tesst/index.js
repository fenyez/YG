let area;
let width;
let height;


width = prompt("Enter width");
height = prompt("Enter height");

area = getArea();

console.log(`The area is: ${area}`);

function getArea(){
    return width * height;
}