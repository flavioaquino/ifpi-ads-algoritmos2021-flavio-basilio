// Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

const prompt = require('prompt-sync')();

// Entrada

const lado = prompt("Qual a medida do LADO do quadrado?: ")

// Processamento

const area = (lado*lado);

// Saída

console.log("A medida da ÁREA do quadrado de lado",lado,"é igual a",area)