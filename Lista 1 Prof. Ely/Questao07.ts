var prompt = require('prompt-sync')();

var i
var vetor = []

for (let i = 0; i < 5; i++){
    console.log('Informe o valor da posição',i,"do Vetor")
    vetor[i] = prompt('----> ')
}

console.log("Vetor:   ",vetor)