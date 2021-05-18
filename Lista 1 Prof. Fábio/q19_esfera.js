// Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

const prompt = require('prompt-sync')();

// Entrada

var raio = Number(prompt("Qual a medida do RAIO da esfera?: "));
var p = Number(3,14);
// Processamento

var volume = (4 * p * (raio*raio*raio))/3;

// Saída

console.log('A medida do VOLUME da esfera de raio',raio,'é de:',volume.toFixed(2));