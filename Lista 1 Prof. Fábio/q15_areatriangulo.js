// Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

const prompt = require('prompt-sync')();

// Entrada

const base = Number(prompt("Qual o valor da BASE do triângulo?: "));
const altura = Number(prompt("Qual o valor da ALTURA do triângulo?: "));

// Processamento

const area = ((base * altura) /2);

// Saída

console.log('A área do triângulo de altura',altura,'e de base',base,'é de:',area)