// Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

const prompt = require('prompt-sync')();

// Entrada

var num1 = Number(prompt('Informe o primeiro número: '));
var num2 = Number(prompt('Informe o segundo número: '));
var num3 = Number(prompt('Informe o terceiro número: '));

// Processamento

var maior = 0

if(num1>maior){
    maior = num1
}
if(num2>maior){
    maior = num2
}
if(num3>maior){
    maior = num3
}

// Saída

console.log('Maior:',maior)