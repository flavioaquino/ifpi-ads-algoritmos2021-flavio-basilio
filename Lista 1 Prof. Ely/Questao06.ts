var prompt = require('prompt-sync')();
var i = 0
var soma = 0
var media = 0

while(num != -1){
    var num = Number(prompt("Informe o próximo número (escreva -1 para parar.): "))
    if(num == -1){
        break
    }
    i++
    soma = Number(soma + num)
}

media = Number(soma/i)

console.log("A soma dos números é:",soma,"e a média aritmética dos números é:",media)