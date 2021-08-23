var prompt = require('prompt-sync')();

var p = Number(prompt("Informe o valor de P: "))
var x = Number(prompt("Informe o valor de X: "))

var resultado = (p*x)/100

console.log(`${p}% de ${x} equivale a:`,resultado)