// // 1
// const minNumber =  (a,b) => {
//     return a < b ? console.log(a) : console.log(b);
// }

// minNumber(78,5);

// // 2

// const evenParity =  (a) => {
//     return a % 2 === 0 ? console.log("Число четное") : console.log("Число нечетное");
// }

// evenParity(34);

// // 3

// function squareNumber (a) {
//     return a**2
// }

// const squareNumberTwo =  (a) =>{
//     console.log(a**2);
// }

// console.log(squareNumber(3));
// squareNumberTwo(4);


// 4

// function hello (){
//     a = +prompt("Сколько тебе лет");
//     if(a <= 0){
//         alert("Вы ввели неправильное значение");
//     } else if (a > 0 && a <= 12){
//         alert("Привет, друг");
//     } else {
//         alert("Добро пожаловать");
//     }
// }

// hello();

// // 5

// const multiplyNumb = (a,b) => {
//     if (isNaN(a) || isNaN(b)){
//         console.log("Одно или оба значения не являются числом")
//     } else{
//         console.log(a*b)
//     }
// }

// multiplyNumb(1,"eokfp");

// // 6

// function cube (number){
//     if(!isNaN(number)){
//         return Math.pow(number,3);
//     } 
// }

// console.log(cube(35));

// 7

function perimetrCircle() {
  return 2 * this.radius * Math.PI;
}
function squareCircle() {
  return Math.PI * this.radius ** 2;
}

const circle1 = {
  radius: 3,
  perimetrCircle: perimetrCircle,
  squareCircle: squareCircle,
};

const circle2 = {
  radius: 3,
  perimetrCircle: perimetrCircle,
  squareCircle: squareCircle,
};

console.log(
  circle1.perimetrCircle(),
  circle2.perimetrCircle(),
  circle1.squareCircle(),
  circle2.squareCircle()
);





