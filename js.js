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
const sub = document.getElementById('-');
    let result = []
const action = function () {
    let number = ""
    let buffer = ""
    let bufferAction = ""
    const input = document.getElementById('calc-input')
    const inputBuffer = document.getElementById('calc-input-buffer')
    const inputResult = document.getElementById('calc-input-result')
    const inputGet = input.getAttribute("value")
    const inputBufGet = inputBuffer.getAttribute("value")

    const resetBuf = function () {
        inputBuffer.setAttribute("value", "")
    }
    const resetBufAct = function () {
        bufferAction = ""
    }
    const resetResult = function () {
        inputResult.setAttribute("value", "");
        result = []
    }
    const resetInput = function () {
        input.setAttribute("value", "")
    }
    const addBuf = function () {
        inputBuffer.setAttribute("value", buffer);
    }
    const addResult = function () {
        result.push(Number(inputGet));
    }

    if (this.getAttribute("id").includes("num")) {

    number = inputGet + this.innerHTML
    input.setAttribute("value", number)
    }

    if (bufferAction === "") {
        buffer = inputGet
        if (!this.getAttribute("id").includes("del")) {
            bufferAction = this.innerHTML
            console.log("🚀 ~ file: js.js ~ line 57 ~ action ~ bufferAction", bufferAction)
    }
    
    }

    if (this.innerHTML === "DEL") {
        resetInput()
        resetBuf();
        resetResult()
        resetBufAct()
    }

    if (this.innerHTML === "+") {
        let sum = 0
        buffer =
            inputBufGet === ""
            ? inputGet
            : `${inputBufGet}+${inputGet}`
        addBuf();
        addResult();
        sum = result.reduce((acc, next)=> acc + next, 0)
        resetInput()
        inputResult.setAttribute("value", sum)
    }
    if (this.innerHTML === "-") {
        let sub = 0
        buffer =
            inputBufGet === ""
            ? inputGet
            : `${inputBufGet}-${inputGet}`
        addBuf();
        addResult();
        sub = result.reduce((acc, next)=> acc - next)
        resetInput()
        inputResult.setAttribute("value", sub)
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
sub.addEventListener('click', action);


/* Вводим значение в инпут
При нажатии действия (+-/*) значение в инпуте добавляется в буфер чисел и пушится 
в массив, сохраняется действие, которое нужно выполнить, обнуляется инпут.
Далее после ввода в инпут нового значения при последующем нажатии действия, сначала 
выполняется действие, сохраненное в буфере, а потом переписывается буфер действия.
Т.е. нужно создать иф, который будет проверять наличие в буфере действия наличие 
записи. При отсутствии он будет записывать действие в буфер, при наличии записи будет 
проверять значение записи в буфере действия и выполнять соответствующее действие, 
а потом перепишет на новое действие, если была нажата кнопка действия. Если же была 
нажата кнопка равно, то обнулит буфер действия и выведет результат. */

