"use strict";

function trafficLight(name) {
    let color = "green";
    let light = function () {
        color =  (color == "green")? "red" : "green";
        let arr = {};
        arr.name = name;
        arr.color = color;
        return arr;
    };
    return light;
} 

let trafficLight1 = trafficLight("One"); // 1
console.log(trafficLight1()); 
console.log(trafficLight1()); 

let trafficLight2 = trafficLight("two"); // 2
console.log(trafficLight2()); 
console.log(trafficLight1()); 
console.log(trafficLight2()); 

let c = trafficLight1();
console.log(`%c ${c.color}`, `background: ${c.color}; color: #bada55`);
// c = trafficLight1();
// console.log(`%c ${c}`, `background: ${c}; color: #bada55`);