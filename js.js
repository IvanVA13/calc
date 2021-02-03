// const el = document.getElementsByClassName("calc")

const num1 = document.getElementById('num1');
console.log(num1);
const num2 = document.getElementById('num2');
console.log(num2);
const num3 = document.getElementById('num3');
console.log(num3);
const num4 = document.getElementById('num4');
console.log(num4);
const num5 = document.getElementById('num5');
console.log(num5);


const addNumber = function () {
    let number = ""
 number += this.innerHTML
    }

num1.addEventListener('click', addNumber);

// скрытие элементов
// document.body.innerHTML = ""

