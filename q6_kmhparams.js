// Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

const prompt = require('prompt-sync')();

// Entrada

const kmh = Number(prompt('Qual a velocidade(km/h)?: '));

// Processamento

const ms = kmh / 3.6;

// Saída
console.log("A sua velocidade média em m/s é de",ms,"m/s.");