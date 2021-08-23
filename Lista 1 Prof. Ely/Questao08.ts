var prompt = require('prompt-sync')();

var i
var vetor = []
var pares = 0

for (let i = 0; i < 20; i++){
    console.log('Informe o valor da posição',i,"do Vetor")
    vetor[i] = prompt('----> ')
    if (vetor[i]%2 == 0){
        pares++
    }
}

console.log("Existem",pares,"números pares no Vetor.")