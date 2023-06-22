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

// const multiplyNumb = (a, b) => {
//   if (isNaN(a) || isNaN(b)) {
//     console.log("Одно или оба значения не являются числом");
//   } else {
//     console.log(a * b);
//   }
// };
//
// multiplyNumb(1, "eokfp");

// // 6

// function cube (number){
//     if(!isNaN(number)){
//         return Math.pow(number,3);
//     }
// }

// console.log(cube(35));

// 7

// function getPerimeter() {
//     return 2 * this.radius * Math.PI;
// }
//
// function getArea() {
//     return Math.PI * this.radius ** 2;
// }
//
// const circle1 = {
//     radius: 3,
//     getPerimeter: getPerimeter,
//     getArea: getArea,
// };
//
// const circle2 = {
//     radius: 3,
//     getPerimeter: getPerimeter,
//     getArea: getArea,
// }
// ;
//
// console.log(
//     `Периметр круга №1: ${circle1.getPerimeter()} м, Площадь: ${circle1.getArea()} м^2,\n
//     Периметр круга №2: ${circle2.getPerimeter()} м, Площадь: ${circle2.getArea()} м^2`
// );

// 8

const month = { // обьект содержащий => название месяца -> Время года
    1: "Зима",
    2: "Зима",
    3: "Весна",
    4: "Весна",
    5: "Весна",
    6: "Лето",
    7: "Лето",
    8: "Лето",
    9: "Осень",
    10: "Осень",
    11: "Осень",
    12: "Зима"
};

function getSseason() {
    let mouthNumber = +prompt("Введите номер месяца");

    if(isNaN(mouthNumber) || mouthNumber > 12 || mouthNumber <= 0){
        alert("Нужно ввести число от 1 до 12");
    } else{
        alert(`Время года: ${month[mouthNumber]}`);
    }
}
