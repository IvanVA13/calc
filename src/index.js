import calcTemp from './markup/input.hbs';
const formRef = document.querySelector("#calc")
const btnList = [
    {
        btn1: 1,
        btn2: 2,
        btn3: 3,
        btn4: "+",
    },
    {
        btn1: 4,
        btn2: 5,
        btn3: 6,
        btn4: "-",
    },
    {
        btn1: 7,
        btn2: 8,
        btn3: 9,
        btn4: "*",
    },
    {
        btn1: ",",
        btn2: 0,
        btn3: "=",
        btn4: "*",
    },
]


const value = []
formRef.innerHTML = calcTemp(btnList)
window.addEventListener("keydown", pressedKey)
const inputRef = document.querySelector("#calc-input")

inputRef.addEventListener("input", enter)

function pressedKey(el) {
    //target key code = 48-57 96-111 187, 189
    function checkKeyCode(keyCode) {
       return keyCode >= 48 && keyCode <= 57
        || keyCode >= 96 && keyCode <= 111
        || keyCode === 187
        || keyCode === 189
    }
    if (checkKeyCode(el.keyCode)) {
        value.push(el.key);
    }
}


    console.log(value);

function enter(el) {
    el.target.value = +value.join("")
}