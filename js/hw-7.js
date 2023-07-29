// // 1
//
// console.log("ksofpwfkw".toUpperCase(""));
//
// // 2
// const compareStart = (el,string) => {
//     return el.toLowerCase().startsWith(string.toLowerCase());
// }
// function getArray (array, string) {
//     const newArray = [];
//     for (el of array) {
//         if (compareStart(el,string)){
//             newArray.push(el.toLowerCase());
//         }
//     }
//     return newArray;
// }
//
// console.log(getArray(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

// // 3
//
// let x = 34.6452468
//
// console.log(`округление: до меншьего целого = ${Math.floor(x)}, до большего цлого = ${Math.ceil(x)}, до ближайшего целого = ${Math.floor(x)}`);

// // 4
//
// const arr= [52, 53, 49, 77, 21, 32];
//
// console.log(Math.max(...arr))

// 5

// console.log(Math.ceil(Math.random()*10));

// // 6
//
// let number = +prompt("Введите число");
// numberTow = Math.floor(number / 2);
// let arr = [];
// let i = 0;
//
// while ( i < numberTow ){
//     arr.push(Math.random()*number);
//     i++;
// }
//
// console.log(arr);

// // 7
//
// const createRand = (min,max) => Math.random() * (max - min) + min;
//
// console.log(createRand(343,456));

// // 8
//
// const myDate = Date()
//
// console.log(myDate)

// // 9
//
// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);

// // 10

// function getMonthTitle (date){
//     const arrMonth = [
//         "Январь", "Февраль", "Март",
//         "Апрель", "Май", "Июнь",
//         "Июль", "Август", "Сентябрь",
//         "Октябрь", "Ноябрь", "Декабрь",
//     ]

//     return arrMonth[date.getMonth()]
// }

// function getWeekDay(date) {
//     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//     return days[date.getDay()];
// }

// function generateDate(Date) {
//     let result;
//     let resultDate = "Дата: ";
//     resultDate +=
//       getMonthTitle(Date) +
//       " " +
//       Date.getDate() +
//       " " +
//       Date.getFullYear() +
//       " " +
//       "года" +
//       " " +
//       "-" +
//       " " +
//       getWeekDay(Date) +
//       "\n";

//     let resultTime = "Время: ";

//     if (Date.getHours() < 10 ){
//         resultTime += "0";
//     }
//     resultTime += Date.getHours() + ":";

//     if (Date.getMinutes() < 10 ){
//         resultTime += "0";
//     }
//     resultTime += Date.getMinutes() + ":";

//     if (Date.getSeconds() < 10){
//         resultTime += "0";
//     }
//     resultTime += Date.getSeconds() + ".";

//     result = resultDate + resultTime

//     return result
// }

// let myDate = new Date();

// console.log(generateDate(myDate))

// // 10.2

const date = new Date(2014, 11, 31, 12, 30, 0);
console.log(date.toTimeString());
  let time = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  let weekday = {
    weekday: 'long'
  }
console.log(date.toLocaleString('ru', options) + ' - ' + 'это ' + date.toLocaleString('ru', weekday));
console.log(date.toLocaleString('ru', time));

// // 11
// function startGameTwo(){
//     let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
//     list = list.sort(() => Math.random() - 0.5);
//     let randNumber = Math.ceil(Math.random() * (list.length - 2) + 2);
//     let result = 0;
//     alert(list);
//     let answerOne = prompt("Чему равнялся первый элемент массива?");
//     let answerTwo = prompt("Чему равнялся последний элемент массива?");
//     let answerThree = prompt(`Чему равнялся ${randNumber} элемент массива ?`);
//
//     answerOne.toLowerCase() === list[0].toLowerCase() ? result ++: result;
//     answerTwo.toLowerCase() === list[list.length - 1].toLowerCase() ? result++ : result;
//     answerThree.toLowerCase() === list[randNumber - 1].toLowerCase() ? result++ : result;
//
//     if (result === 3){
//         alert('Поздравляю тебя! Ты генний!')
//     } else if (result === 2){
//         alert("Вы были близки к победе!")
//     } else if (result === 1) {
//         alert("Неплохая память, но можно лучше)")
//     } else {
//         alert("Вы ничего не угадали")
//     }
//
// }
//
// console.log(hello())


