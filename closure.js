// function fouter () {
//     let v = 100;
//     function finner () {
//        console.log('v =' + v); // v = 100
//     }
//     finner();
//   }
//   fouter(); // v = 100

// function closure(n) {
//     let localVar = n;
//     return function() {
//         return localVar;
//     }; 
// }

// let one = closure(1); // передаем 1

// console.log(one());

// let two = closure(2); // передаем 2

// console.log(two());

function initCounter() {
    let counter = 0;
    let innerCounter = function () {
        return ++counter;
    };
    return innerCounter;
} 

let counter1 = initCounter(); // первый счетчик
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3
console.log(counter1()); // 4

let counter2 = initCounter(); // второй счетчик 
console.log( counter2() ); // 1 - второй счетчик независим от первого
console.log(counter1()); // 5 - первый счетчик продолжает считать независимо от второго!
console.log( counter2() ); // 2
console.log( counter2() ); // 3
console.log(counter1()); // 6

console.log('%c Oh my heavens! ', 'background: green; color: #bada55');