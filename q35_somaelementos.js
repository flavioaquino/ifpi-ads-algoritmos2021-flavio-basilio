// Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.: número = 9534 ; soma = 9+5+3+4 = 21.

const prompt = require('prompt-sync')();

// Entrada

var numero = prompt("Qual o número que você deseja somar os elementos?: ");

// Processamento

var A = Number(numero[0]);
var B = Number(numero[1]);
var C = Number(numero[2]);
var D = Number(numero[3]);

var soma = (A+B+C+D);

// Saída

console.log("A soma dos elementos de",numero,"é igual a:",soma);