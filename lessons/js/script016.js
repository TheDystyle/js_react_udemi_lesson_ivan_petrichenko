"use strict";
// functions
// FUNCTION DECLARATION
// Создается до начала выполнения скрипта,
// можно вызвать перед объявлением

// without parameters
// function showFirstMessage(){
//   console.log("Hello world");
// }

// showFirstMessage();

// with parameters
// function showFirstMessage2(text){
//   console.log(text);
// }

// let text = prompt("What do you want write in console?","HI");

// showFirstMessage2(text);


// function with variables

// let num = 20; // global variable

// function showFirstMessage(text){
//   console.log(text);
//   let num = 10; // local variable
// }

// showFirstMessage("text");
// console.log(num);

// function calc
// function calc(a,b){
//   return(a + b);
// }

// console.log(calc(1,9));
// console.log(calc(5,6));
// console.log(calc(10,6));

//function ret
// function ret(){
//   let num = 50;
//   return num;
// }

// //console.log(ret());
// const anotherNum = ret();
// console.log(anotherNum);


// FUNCTION EXPRESSION
// Создается только тогда кога доходит поток кода,
// можно вызвать только после объвления

// const logger = function() {
//   console.log("hello!");
// }

// logger();

// СТРЕЛОЧНАЯ ФУНКЦИЯ
// не имеет своего контекста
const calc = (a, b) => {return a + b};
const calc2 = (a, b) => a + b;

console.log(calc);
console.log(calc2);
