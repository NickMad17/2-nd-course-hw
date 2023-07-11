// // 1
//
//
//
// const people = [
//     {name: "Олег", age: 7 },
//     {name: "Анна", age: 17 },
//     {name: "Глеб", age: 29 },
//     {name: "Оксана", age: 47 }
// ]
//
// console.log(people.sort(function (a,b) {
//     if (a.age > b.age) {
//         return 1
//     }
//     if(a.age < b.age){
//         return -1
//     }
//     return 0
// }));

// // 2

// const isPositive = (element) => {
//     if (element > 0){
//         return element;
//     }
//     return "";
// }

// const isMale = (element) => {
//     if (element.gender === "male"){
//         return element;
//     }
//     return "";
// }


// function filter (arr, melMetod){
//     let massive = [];
//     for (el of arr) {
//         if(melMetod(el) !== "") {
//             massive.push(melMetod(el));
//         }
//     }
//     return massive;
// }

// const numbers = [1,2,4,-4,78,-34,0,245,45]

// const people = [
//     {name: "Глеб" , gender: "male"},
//     {name: "Анна" , gender: "female"},
//     {name: "Олег" , gender: "male"},
//     {name: "Оксана" , gender: "female"},
// ]

// console.log(filter(people,isMale));
// console.log(filter(numbers,isPositive));

// // 3
//
// const dateTimer = (date,endTime) => {
//     if (isNaN(+date) || isNaN(+endTime)) {
//         console.log("Некорректное Дата");
//         return;
//     }
//
//
//
//     const interval = setInterval(() => {
//         console.log(date);
//     }, 1000 * 3);
//
//     setTimeout(() => {
//         clearInterval(interval);
//         console.log(`${endTime} секунд прошло`);
//
//     },  1000 * endTime );
// }
//
// const myDate = new Date()
// dateTimer(myDate,30);

// // 4
//
// function delayForSecond (callback) {
//     setTimeout( () => {
//         callback()
//     }, 1000*3);
// }
//
// delayForSecond(function () {
//     console.log("hello, Gleb")
// })

// // 5
//
// // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда»,
// // а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//
//         if(cb) {
//             cb();
//         }
//     }, 1000)
// }
//
// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }
//
// // Код выше менять нельзя
//
// // Нужно изменить код ниже:
// delayForSecond(function () {
//     setTimeout(() => {
//         sayHi("Глеб");
//     }, 1000)
// })
