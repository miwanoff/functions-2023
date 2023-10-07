"use strict";
let val1 = 0;
let val2 = 0;
let action = "";
let result = 0;

function add() {
  val1 = +document.getElementById("num").value;
  action = "+";
  //alert(val1 + action);
}

function minus() {
  val1 = +document.getElementById("num").value;
  action = "-";
  //alert(val1 + action);
}

function calc() {
  val2 = +document.getElementById("num").value;
  //alert(val1 + action + val2);
  let expr = val1 + action + val2;
  result = eval(expr);
  console.log(result);
  
}
