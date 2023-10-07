"use strict";

function trafficLight() {
    let color = "green";
    let light = function () {
        return color;
    };
    return light;
} 

let trafficLight1 = trafficLight(); // первый счетчик
console.log(trafficLight1()); 
console.log(trafficLight1()); 