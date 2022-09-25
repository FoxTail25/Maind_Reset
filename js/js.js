// Получаем рандомное значение
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Получаем доступ к элементу ответственному за отображение задачи
let task = document.querySelector('.task__text');

// пара рандомных чисел от нуля до 100
let num1 = getRandomInRange(0, 100);
let num2 = getRandomInRange(0, 100);
// сумма рандомных чисел
let sum = num1 + num2;
//доступ к тегу инпут
let input = document.getElementById('answer');
// Доступ к месту где отображается ответ
let answ = document.querySelector('.check');

function new_task () {
    let num1 = getRandomInRange(0, 100);
    let num2 = getRandomInRange(0, 100);
    sum = num1 + num2;
    let randomTaskText = `Сколько будет ${num1} + ${num2} = ?`
    
    task.innerText = randomTaskText;
    answ.innerText = '';
    input.value = '';
}
new_task()

function check() {

    let z = input.value
    // console.log(input.innerText,z,sum)
    if (z == sum+"") {
        answer('right')
    } else if (z == "") {
        answer('empty')
    } else if (z != sum+'') {
        answer('wrong')
    }
}

function answer (a) {
    if (a === "right") {
        answ.innerText = `Правильно ${sum}`
    } else if (a === 'empty') {
        answ.innerText = `Вы не ввели ответ`
        
    } else if (a === "wrong") {
        answ.innerText = `К сожалению ваш ответ не верный.`
    } else {
    answ.innerText = `Ответ ${sum}`;
    }
}


