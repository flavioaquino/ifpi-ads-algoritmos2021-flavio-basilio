// Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

const prompt = require('prompt-sync')();

// Entrada

var num1 = Number(prompt('Informe o primeiro número: '));
var num2 = Number(prompt('Informe o segundo número: '));

// Processamento

var maior = 0
var menor = 999999

if(num1<menor){
    menor = num1
}
if(num2<menor){
    menor = num2
}
if(num1>maior){
    maior = num1
}
if(num2>maior){
    maior = num2
}

// Saída

console.log('Maior:',maior,'\nMenor:',menor)