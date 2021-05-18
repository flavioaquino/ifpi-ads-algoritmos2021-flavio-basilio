// Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

const prompt = require('prompt-sync')();

// Entrada

const numero = prompt('Qual o número?: ')

// Processamento

const A = Number(numero[0]);
const B = Number(numero[1]);
var soma = (A + B);
var subtração = (A - B);
var resultado = soma / subtração;

// Saída

console.log("O resultado da divisão entre a soma e a divisão do número descrito é de:",resultado.toFixed(2))