// Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o resultado da última divisão efetuada.

const prompt = require('prompt-sync')();

function main(){

    // Entrada

    var num = Number(prompt("Qual o número que será dividido?: "))

    // Processamento

     while(num/2 >= 0.1){
        num /= 2}
    // Saída
    console.log(num)    
}

main();