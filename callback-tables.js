function printTable(from, to, step, func) {
  if (func === undefined) {
    return;
  }
  from = from;
  to = to;
  step = step || 1;
  document.write("<table border='1' cellspacing='0'>");
  for (var x = from; x <= to; x += step) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + func(x) + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}

function quadratic(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}


let expr = "x * 2";
let f;
eval("f = function (x) {return " + expr + ";}");

let sqr = new Function("x", "return x * x");

printTable(0, 10, 1, sqr);
function callbackTables() {
  // from, to, step
  // # func number
  switch (key) {
    case "quadratic":
      printTable(-10, 10, 0.5, quadratic);
      break;
    case "cube":
      printTable(-10, 10, 0.5, cube);
      break;
    default:
      break;
  }
}
