// function sayHi(firstName, lastName) {

//     function getFullName() {
//        return firstName + " " + lastName;
//     }
//     console.log( "Hello, " + getFullName() );
//   }

//   sayHi("John", "Johnson");

// function outer() {
//     let v = 100;
//     function inner() {
//         let n = 1;
//         console.log('n = ' + n + ' v = ' + v);
//     }
//     //console.log(n);
//     inner(); // вызов вложенной функции из внешней
//     //document.write(n); // ошибка "n is not defined" - вызывать нельзя
// }
// outer(); // n = 1 v = 100

// function sayHi() {
//   console.log("Привет!");
// }
// alert("sayHi: "+sayHi);
// let f = sayHi;
// alert("f: "+f);
// let f = function () {
//   console.log("Привет!");
// };
// f();

// let square = function (x) {
//   return x * x;
// };
// let res = square(2);
// alert(res); // 4

// (function () {
//   alert("Hello, ");
// })();
// function comp(a, b) {
//   return a > b ? -1 : a == b ? 0 : 1;
// }

// let as = [4, 8, 2, 31];
// as.sort((a, b) => a - b);
// console.log(as); //21, 3, 4, 8

let sayHi = function() {
  console.log("Привет!") ;
};
sayHi();

