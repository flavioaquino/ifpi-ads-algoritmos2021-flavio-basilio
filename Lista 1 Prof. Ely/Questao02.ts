const prompt = require('prompt-sync')();

var dol = Number(prompt("Informe o valor atual do dólar: "))
var valor = Number(prompt("Informe quantos dólares deseja converter para real: "))

var valor_f = valor * dol

console.log(valor,"Dólares equivalem a R$",valor_f,"Reais.")