// Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.

const prompt = require('prompt-sync')();

// Entrada

var numeros = prompt("Digite o número de 3 dígitos que deseja subtrair com sua diferença: ");

// Processamento

var A = (numeros[0]);
var B = (numeros[1]);
var C = (numeros[2]);

var numero1 = Number(A+B+C);
var numero2 = Number(C+B+A);

var soma = (numero1 - numero2);

// Saída

console.log("A subtração de",numero1,"com",numero2,"é:",soma);
