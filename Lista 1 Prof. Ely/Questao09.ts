var prompt = require('prompt-sync')();

var s = String(prompt("Informe a Frase/String: "))
var a = prompt("Informe qual o caractere A: ")
var b = prompt("Informe qual o caractere B: ")

var resposta = s.split(a).join(b)

console.log(resposta)