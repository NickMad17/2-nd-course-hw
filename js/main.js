// ----------- game one ------------

const month = { // обьект содержащий => номер месяца -> Время года
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

function getSeason() {
    let mouthNumber = +prompt("Введите номер месяца");

    if(isNaN(mouthNumber) || mouthNumber > 12 || mouthNumber <= 0){
        alert("Нужно ввести число от 1 до 12");
    } else{
        alert(`Время года: ${month[mouthNumber]}`);
    }
}

// ----------- game two ------------

function startGameTwo(){
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    let randNumber = Math.ceil(Math.random() * (list.length - 2) + 2);
    let result = 0;
    let windowList = "";
    let count = 0;
    for (let i = 0; i < list.length; i++){
        if (count >= 6){
            windowList+= "\n"
            count = 0;
        }
        windowList += list[i] + " ";
        count++;
    }
    alert(windowList)
    let answerOne = prompt("Чему равнялся первый элемент массива?");
    let answerTwo = prompt("Чему равнялся последний элемент массива?");
    let answerThree = prompt(`Чему равнялся ${randNumber} элемент массива ?`);

    answerOne.toLowerCase() === list[0].toLowerCase() ? result ++: result;
    answerTwo.toLowerCase() === list[list.length - 1].toLowerCase() ? result++ : result;
    answerThree.toLowerCase() === list[randNumber - 1].toLowerCase() ? result++ : result;

    if (result === 3){
        alert('Поздравляю тебя! Ты генний!')
    } else if (result === 2){
        alert("Вы были близки к победе!")
    } else if (result === 1) {
        alert("Неплохая память, но можно лучше)")
    } else {
        alert("Вы ничего не угадали")
    }

}


// -------- del hover ----------

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
};

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {

    }
};

// -------- scrollReveal ----------

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 1800,
    delay: 150
});

ScrollReveal().reveal('.header__title, .games, .header__text, .one__left, .two__left, .three p, .three h1', { origin: 'top' });
ScrollReveal().reveal('.one__right , .two__right, .three a, .header a ', { origin: 'bottom' });

