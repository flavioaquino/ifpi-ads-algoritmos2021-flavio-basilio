// Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).

const prompt = require('prompt-sync')();

// Entrada

const numero = prompt("Qual o número?: ");

// Processamento

var A = numero[0];
var B = numero[1];
var BA = B+A;
// Saída

console.log("O número em ordem inversa é",BA)
