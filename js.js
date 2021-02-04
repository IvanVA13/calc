// const el = document.getElementsByClassName("calc")

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const num0 = document.getElementById('num0');
const del = document.getElementById('del');
const sum = document.getElementById('+');
    let result = []
const action = function () {
    const input = document.getElementById('calc-input')
    const inputBuffer = document.getElementById('calc-input-buffer')
    const inputResult = document.getElementById('calc-input-result')
    let number = ""
    let buffer = ""
    if (this.innerHTML === "DEL") {
        input.setAttribute("value", "")
        inputBuffer.setAttribute("value", "");
        inputResult.setAttribute("value", "");
        result = []
    }
    if (this.getAttribute("id").includes("num")) {
        number = input.getAttribute("value") + this.innerHTML
        input.setAttribute("value", number)
    }
    if (this.innerHTML === "+") {
        let sum = 0
        buffer =
            inputBuffer.getAttribute("value") === ""
            ? input.getAttribute("value")
            : `${inputBuffer.getAttribute("value")}+${input.getAttribute("value")}`
        inputBuffer.setAttribute("value", buffer);
        result.push(Number(input.getAttribute("value")));
        sum = result.reduce((acc, next)=> acc + next, 0)
        input.setAttribute("value", "")
        inputResult.setAttribute("value", sum)
    }
    if (this.innerHTML === "-") {
        sub()
    }
    if (this.innerHTML === "/") {
        div()
    }
    if (this.innerHTML === "*") {   
        mult()
    }
    if (this.innerHTML === "=") {
        result()
    }

 }

num1.addEventListener('click', action);
num2.addEventListener('click', action);
num3.addEventListener('click', action);
num4.addEventListener('click', action);
num5.addEventListener('click', action);
num6.addEventListener('click', action);
num7.addEventListener('click', action);
num8.addEventListener('click', action);
num9.addEventListener('click', action);
num0.addEventListener('click', action);
del.addEventListener('click', action);
sum.addEventListener('click', action);