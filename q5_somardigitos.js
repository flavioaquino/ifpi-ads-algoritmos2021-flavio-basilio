// Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

const prompt = require('prompt-sync')();

// Entrada

const numero = (prompt('Qual o número?(3 dígitos): '))

// Processamento
var A = Number(numero[0])
var B = Number(numero[1])
var C = Number(numero[2])

const valor = A + B + C;

// Saída

console.log('O valor da soma dos números é:',valor)