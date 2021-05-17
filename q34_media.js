// Leia 3 números, calcule e escreva a média dos números.

const prompt = require('prompt-sync')();

// Entrada

var numero1 = Number(prompt("Qual o primeiro número?: "));
var numero2 = Number(prompt("Qual o segundo número?: "));
var numero3 = Number(prompt("Qual o terceiro número?: "));

// Processamento

var media = (numero1 + numero2 + numero3)/3;

// Saída

console.log("A média dos números é aproximadamente:",media.toFixed(2));