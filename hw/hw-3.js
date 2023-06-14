// ------1-------

let password = "password";
let userPassword = prompt("Введите пароль");
if (userPassword === password){
    console.log("Пароль введен верно");
}else{
    console.log("Пароль введен неправильно");
};

// ------2-------

let c = 0;

if (c > 0 && c < 10){
    console.log("Верно")
}else{
    console.log("Неверно")
}

// ------3-------

let d = 23;
let e = 10000;

if(d > 100 || e > 100){
    console.log("Верно")
}else{
        console.log("Неверно")
    }

// ------4-------

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// ------5-------

let numbYear = -12 ; 

let year = {
    1: "Зима",
    2: "Весна",
    3: "Лето",
    4: "Осень"
};

if (numbYear >= 0){
    switch (numbYear) {
        case 1:
        case 2:
        case 3:
            console.log(year[1])
            break;

        case 4:
        case 5:
        case 6:
            console.log(year[2])
            break;

        case 7:
        case 8:
        case 9:
            console.log(year[3])
            break;

        case 10:
        case 11:
        case 12:
            console.log(year[4])
            break;
        default:
            console.log(`Такого месяца не существует, введите на ${12 - numbYear} меньше`)
            break;
    }
}else{
    console.log("Год не может быть отрицательным или равен нулю")
}

// ------7-------


let myNumber = +prompt("Пожалуйста, введите любое число");
let intNumber;
// Пишу конструкцию на проверку значемния Nan, чтобы его точно отследить. Т.к. Nan !== Nan
if (myNumber === Number(myNumber)){
    intNumber = myNumber;
    // Проверяю число на ноль
    if(intNumber === 0){
        alert("Вы ввели 0");

    }else if(intNumber % 2 === 0){
        alert(`число ${intNumber} является чётным`);

    }else{
        alert(`число ${intNumber} является нечётным`);

    }

}else{
    // Создаю исключение и вывожу в консоль ошибку
    console.error("Некорректный ввод");
};