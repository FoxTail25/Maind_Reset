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
// доступ к фону задач (основному блоку)
let main = document.querySelector('.main')
function new_task () {
    let num1 = getRandomInRange(0, 100);
    let num2 = getRandomInRange(0, 100);
    sum = num1 + num2;
    let randomTaskText = `Сколько будет ${num1} + ${num2} = ?`
    
    task.innerText = randomTaskText;
    answ.innerText = '';
    input.value = '';
    input.style.backgroundColor = '#FFF';
    main.style.backgroundColor = 'rgba(255,255,255,0.65';
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
        input.style.backgroundColor = '#60F52F';
        main.style.backgroundColor = 'rgba(178,217,134,0.65';
    } else if (a === 'empty') {
        answ.innerText = `Вы не ввели ответ`
        
    } else if (a === "wrong") {
        answ.innerText = `К сожалению ваш ответ не верный.`
        main.style.backgroundColor = 'rgba(250,105,37,0.65';
        input.style.backgroundColor = 'red';
    } else {
    answ.innerText = `Ответ ${sum}`;
    }
}


