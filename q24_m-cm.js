// Leia um valor em m, calcule e escreva o equivalente em cm.

const prompt = require('prompt-sync')();

// Entrada

const m = Number(prompt("Quantos Metros(M) você deseja transformar em Centímetros(CM)?: "));

// Processamento

const cm = (m * 100);

// Saída

console.log(m,'Metros equivalem a',cm,'Centímetros');