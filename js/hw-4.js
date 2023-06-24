// // 1

// i = 0;

// while (i < 2){
//     console.log("Привет");
//     i++;
// };

// // 2

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// // 3

// for (let i = 7; i <= 22; i++) {
//     console.log(i);
// };

// // 4

// const obj = {
//     Коля : "200",
//     Вася : "300",
//     Петя : "400"
// };

// for(let item in obj){
//     console.log(`${item} - зарплата ${obj[item]}`);
// }

// // 5

// let n = 100;
// let count = 0;
// while((n/2) > 50){
//     n = (n/2);
//     count++
// }
// console.log(`Число = ${n/2} а количество итераций = ${count + 1}`);

// // 6

// const mouth = { // обьект содержащий => название месяца: кол-во дней
//     "1. Январь" : 31,
//     "2. Февраль" : 28,
//     "3. Март" : 31,
//     "4. Апрель" : 30,
//     "5. Май" : 31,
//     '6. Июнь' : 30,
//     "7. Июль" : 31,
//     "8. Август" : 31,
//     "9. Сентябрь" : 30,
//     "10. Октябрь" : 31,
//     "11. Ноябрь" : 30,
//     "12. Декабрь" : 31
// }

// let friday = 1; // По заданию первая пятница в году 1 числа
// let countMax = 0;
// for (let index in mouth){
//     let count = 0;
//     for (; friday <= mouth[index] ; count++){
//         friday+=7;
//         console.log(`Нужно готовить отчет !`)
//     }
//     friday = friday - mouth[index];
//     countMax += count;
//     console.log(`месяц - №${index}, кол-во дней: ${mouth[index]}, пятниц: ${count}`);
// }
// console.log(`всего пятниц в году: ${countMax}`);



