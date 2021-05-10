// const el = document.getElementsByClassName("calc")

// const num1 = document.getElementById('num1');
// const num2 = document.getElementById('num2');
// const num3 = document.getElementById('num3');
// const num4 = document.getElementById('num4');
// const num5 = document.getElementById('num5');
// const num6 = document.getElementById('num6');
// const num7 = document.getElementById('num7');
// const num8 = document.getElementById('num8');
// const num9 = document.getElementById('num9');
// const num0 = document.getElementById('num0');
// const del = document.getElementById('del');
// const sum = document.getElementById('+');
// const sub = document.getElementById('-');
// let result = []
// let number = ""
// let buffer = ""
// let bufferAction = ""
// const action = function () {
//     const input = document.getElementById('calc-input')
//     const inputBuffer = document.getElementById('calc-input-buffer')
//     const inputResult = document.getElementById('calc-input-result')
//     const inputGet = input.getAttribute("value")
//     const inputBufGet = inputBuffer.getAttribute("value")

//     const resetBuf = function () {
//         inputBuffer.setAttribute("value", "")
//     }
//     const resetBufAct = function () {
//         bufferAction = ""
//     }
//     const resetResult = function () {
//         inputResult.setAttribute("value", "");
//         result = []
//     }
//     const resetInput = function () {
//         input.setAttribute("value", "")
//     }
//     const addBuf = function () {
//         inputBuffer.setAttribute("value", buffer);
//     }
//     const addResult = function () {
//         result.push(Number(inputGet));
//     }

//     if (this.getAttribute("id").includes("num")) {
//         number = inputGet + this.innerHTML
//         input.setAttribute("value", number)
//     }

//     if (bufferAction === "+" && !this.getAttribute("id").includes("num")) {
//         let sum = 0
//         buffer =
//             inputBufGet === ""
//                 ? inputGet
//                 : `${inputBufGet}+${inputGet}`
//         addResult();
//         addBuf()
//         sum = result.reduce((acc, next) => acc + next)
//         inputResult.setAttribute("value", sum)

//     }

//     if (bufferAction === "-" && !this.getAttribute("id").includes("num")) {
//         let sub = 0
//         buffer =
//             inputBufGet === ""
//                 ? inputGet
//                 : `${inputBufGet}-${inputGet}`
//         addResult();
//         addBuf()
//         sub = result.reduce((acc, next) => acc - next)
//         inputResult.setAttribute("value", sub)
//     }

//     if (!this.getAttribute("id").includes("num")) {
//         bufferAction = this.innerHTML
//         addResult();
//         resetInput();
//         console.log(bufferAction);
//     }

//     if (this.innerHTML === "DEL") {
//         resetInput()
//         resetBuf();
//         resetResult()
//         resetBufAct()
//     }
// }

// num1.addEventListener('click', action);
// num2.addEventListener('click', action);
// num3.addEventListener('click', action);
// num4.addEventListener('click', action);
// num5.addEventListener('click', action);
// num6.addEventListener('click', action);
// num7.addEventListener('click', action);
// num8.addEventListener('click', action);
// num9.addEventListener('click', action);
// num0.addEventListener('click', action);
// del.addEventListener('click', action);
// sum.addEventListener('click', action);
// sub.addEventListener('click', action);


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

// let hi = "Hi"
// function sayHello() {
//     const say = function () {
//         let bongorno = "bongorno"
//         return console.log(hello, hi, bongorno);
//     }
//   // Local variable that ends up within the closure 
//   let hello = 'Hello, world!';
//   return say;
// }
// var sayHelloClosure = sayHello(); 
// sayHelloClosure(); // ‘Hello, world!’


// var x = 10;
// function foo(a) {
//   var b = 20;

//   function bar(c) {
//     var d = 30;
//     return boop(x + a + b + c + d);
//   }

//   function boop(e) {
//     return e * -1;
//   }

//   return bar;
// }

// var moar = foo(5); // Closure  
// /* 
//   The function below executes the function bar which was returned 
//   when we executed the function foo in the line above. The function bar 
//   invokes boop, at which point bar gets suspended and boop gets push 
//   onto the top of the call stack (see the screenshot below)
// */
// moar(15); 
  // for (let i = 0; i < arr.length; i += 1) {

  // }

// function mutation(arr) {
  
//   for (let i = 0; i < arr[1].split("").length; i += 1) {
//     if(!arr[0].toLowerCase().split("").includes(arr[1].toLowerCase().split("")[i])) {
//     return false
//     }
//   }

//   return true
// }

// mutation(["ate", "date"]);

// Напишите функцию, которая разбивает массив (первый аргумент) 
// на группы длиной size(второй аргумент) и возвращает их как двумерный массив.
// Решение
// function chunkArrayInGroups(arr, size) {
//   const newArr = []
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size))
//   }
//   return newArr;
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);


// Сортировка по возрастанию
/* 
function alphabeticalOrder(arr) {
  // Only change code below this line
return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });

  // Only change code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]))
*/


// Сортировка с созданием нового массива
/* 
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
return arr.map((el)=>el).sort((a, b) => a === b ? 0 : a > b ? 1 : -1)

  // Only change code above this line
}
console.log(nonMutatingSort(globalArray))
*/

// Сплит строки по нескольким разделителям с применением регулярного выражения
/* 
function splitify(str) {
  // Only change code below this line
return str.split(/,|\s|\W/)

  // Only change code above this line
}
console.log(splitify("Hello World,I-am code"))
*/

// Создание ссылки в нижнем регистре с применением регулярных выражений
/* 
// Only change code below this line
function urlSlug(title) {
return title
.toLowerCase()
.split(/\s+/)
.filter((el)=>el)
.join("-")

}
// Only change code above this line

urlSlug(" Winter Is  Coming")
*/