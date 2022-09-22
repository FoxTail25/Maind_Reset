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
    
    task.innerText = randomTaskText
    
}
new_task()

function check() {
    let z =input.value
    
    // console.log(input.innerText,z,sum)
    if (z == sum+"") {
        answer(true)
    } else {
        console.log('no')
    }
    
}

function answer (a) {
    a ? answ.innerText = `Правильно ${sum}`:
    answ.innerText = `Ответ ${sum}`;
}


