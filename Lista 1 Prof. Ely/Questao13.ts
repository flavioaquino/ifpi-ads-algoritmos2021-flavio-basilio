var prompt = require('prompt-sync')();

var n = String(prompt("Informe o Número Inteiro N: "))
var d = String(prompt("Informe o Dígito D (Entre 0 e 9): "))
var contagem = 0

var tamanhoN = n.length

while(tamanhoN>-1){
    if(n[tamanhoN]==d){
        contagem++
    }
    tamanhoN--
}

console.log("O dígito",d,"aparece:",contagem,"vezes.")