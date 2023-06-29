// // 1
//
// const arr = [1, 5, 4, 10, 0, 3];
// const array = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 10) {
//     break;
//   }
//   array.push(arr[i]);
// }
// console.log(array);
//
// // 2
//
// const arr = [1, 5, 4, 10, 0, 3];
// const newArr = arr.findIndex((index) => index === 4);
//
// console.log(newArr);
//
// // 3
//
// const arr = [1, 3, 5, 10, 20];
// console.log(arr.join(" "));
//
// // 4
//
// const arr = [];
// let i = 0;
//
// while (i < 3) {
//   arr.push([]);
//
//   for (let j = 0; j < 3; j++) {
//     arr[i].push(1);
//   }
//   i++;
// }
//
// console.log(arr);
//
// // 5
//
// const arr = [1, 1, 1];
//
// for (let i = 1; i < 4; i++) {
//   arr.push(2);
// }
//
// console.log(arr);
//
// // 6
//
// const arr = [9, 8, 7, "a", 6, 5];
//
// arr.sort().pop("a");
//
// console.log(arr);
//
// // 7
//
// const arr = [9, 8, 7, 6, 5];
// let massage = +prompt("Введите число");
//
// const result = arr.find((el) => el === massage)
//   ? alert("угадал")
//   : alert("Не угадал");
//
// // 8
// // Задание показалось мне слишком простым и я решил сделать функцю проверки на полиндром )=_=(
// const isPalindrome = (word) => word === word.split("").reverse().join("");
//
// console.log(isPalindrome("abccba"));
//
// // 9
//
// const bigArr = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const newArr = [];
//
// for (let arr of bigArr) {
//   for (let item of arr) {
//     newArr.push(item);
//   }
// }
//
// console.log(newArr);
//
// // 10
//
// const arr = [12, 34, 43, 53, 234, 234, 234, 13, 245, 25];
//
// for (let i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i] + arr[i + 1]);
// }
//
// // 11
//
// const squareArr = (arr) => {
//   const newArr = arr.map((el) => el ** 2);
//   return newArr;
// };
// console.log(squareArr([1, 2, 23, 24]));
//
// // 12
//
// const isArray = (array) => {
//   const newArr = [];
//   for (let el of array) {
//     newArr.push(el.length);
//   }
//   return newArr;
// };
//
// console.log(isArray(["qefqe", "egwgwrw"]));
//
// // 13
//
// function filterPositive(array) {
//   return array.filter((el) => el < 0);
// }
//
// console.log(filterPositive([-25, 25, 0, -1000, -2]));
//
// // 14
//
// let arr = (arr) => {
//   arr = [];
//   for (let i = 1; i <= 10; i++) {
//     arr.push(Math.floor(Math.random() * 10));
//   }
//   return arr;
// };
//
// const array = arr();
//
// console.log(
//   `Массив: [${array}] массив четных чисел: [${array.filter(
//     (el) => el % 2 === 0
//   )}]`
// );
//
// 15;
//
// let arr = (arr) => {
//   arr = [];
//   for (let i = 1; i <= 6; i++) {
//     arr.push(Math.floor(Math.random() * 10));
//   }
//   return arr;
// };
//
// const array = arr();
// const average = array.reduce((one, two) => one + two, 0) / array.length;
//
// console.log(`Ваш массив: [${array}],среднее значение: ${average}`);
