const prompt = require('prompt-sync')();

var num = Number(prompt("Digite o número que será utilizado: "))

var ant = Number(num - 1)

var suc = Number(num + 1)

console.log("O antecessor do número",num,"é",ant,"e o sucessor é",suc,".")