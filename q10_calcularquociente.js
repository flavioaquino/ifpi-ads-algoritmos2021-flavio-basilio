// Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

const prompt = require('prompt-sync')();

// Entrada

const numero = prompt('Qual é o número?: ');

// Processamento

var A = numero[0];
var B = numero[1];

var quociente = A / B;
var resto = (quociente%1);

// Saída

console.log("O quociente da divisão é",Math.floor(quociente),"e o resto da divisão é",resto.toFixed(2),"totalizando",quociente.toFixed(2));