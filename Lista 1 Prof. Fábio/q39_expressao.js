// Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = (R + S)/2

const prompt = require('prompt-sync')();

// Entrada

var A = Number(prompt("Qual o primeiro número?: "));
var B = Number(prompt("Qual o segundo número?: "));
var C = Number(prompt("Qual o terceiro número?: "));

// Processamento

var R = (A + B)*(A + B);
var S = (B + C)*(B + C);
var D = (R + S)/2;

// Saída

console.log("O resultado da expressão com os números anteriormente fornecidos é",D);