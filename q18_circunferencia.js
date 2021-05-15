// Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

const prompt = require('prompt-sync')();
p = Number(3,14);

// Entrada

const raio = Number(prompt("Qual a medida do RAIO da circunferência?: "));

// Processamento

const comprimento = 2 * p * raio

// Saída

console.log("A medida do comprimento da circunferência de raio",raio,"é de:",comprimento.toFixed(2))