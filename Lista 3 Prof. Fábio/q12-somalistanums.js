// Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.

const prompt = require('prompt-sync')();

function main(){
    var media = 0
    var soma = 0
    var num = 0
    var N = Number(prompt("Informe o número de elementos(N): "))
    for(let i=1;i<N+1;i++){
        num = Number(prompt(`Informe o número ${i} da lista: `))
        soma = soma + num
    }
    media = soma/N
    console.log("Soma:",soma,"\nMédia:",media)
}
main();