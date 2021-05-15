// Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

const prompt = require('prompt-sync')();

// Entrada

const base = prompt("Qual o valor da BASE do retângulo?: ");
const altura = prompt("Qual o valor da ALTURA do retângulo?: ")

// Processamento

const area = (base * altura)

// Saída

console.log("A área do retângulo de base",base,"e altura",altura,'é de:',area)
