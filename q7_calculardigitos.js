// Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

const prompt = require('prompt-sync')();

// Entrada

const numeros = (prompt('Qual o número?: '));

// Processamento

var A = Number(numeros[0])
var B = Number(numeros[1])
var C = Number(numeros[2])

var soma = A + B;
var diferença = B - C;

// Saída

console.log("A soma entre os dois primeiros números é",soma,"e a diferença entre os dois últimos números é",diferença);