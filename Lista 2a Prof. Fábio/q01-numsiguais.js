// Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

const input = require('prompt-sync')();

// Entrada

var num1 = Number(input('Informe o primeiro número: '));
var num2 = Number(input('Informe o segundo número: '));
var num3 = Number(input('Informe o terceiro número: '));


// Processamento & Saída

if(num1 == num2 && num1 == num3) { 
    console.log('Todos os números são iguais!');
} else if (num1 == num2) {
    console.log('Primeiro e segundo número iguais!');
} else if(num1 == num3) {
    console.log('Primeiro e terceiro número iguais!');
} else if(num2 == num3) {
    console.log('Segundo e terceiro números iguais!');
} else{
    console.log('Todos os números são diferentes!');
}