"use strict";

function trafficLight() {
    let color = "green";
    let light = function () {
        color =  (color == "green")? "red" : "green";
        return color;
    };
    return light;
} 

let trafficLight1 = trafficLight(); // 1
console.log(trafficLight1()); 
console.log(trafficLight1()); 

let trafficLight2 = trafficLight(); // 2
console.log(trafficLight2()); 
console.log(trafficLight1()); 
console.log(trafficLight2()); 