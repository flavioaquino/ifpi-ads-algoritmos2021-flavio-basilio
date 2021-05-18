// Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

const prompt = require('prompt-sync')();

// Entrada

const numero = prompt("Escreva um número de até 3 dígitos: ");

// Processamento

var A = numero[0]
var B = numero[1]
var C = numero[2]

var resultado = C + B + A;

// Saída

console.log("O seu número escrito inversamente é",resultado)