var prompt = require('prompt-sync')();

var s = String(prompt("Informe a Frase/String: "))

var resposta = s.replace(/[aeiou]/gi, "")

console.log(resposta)