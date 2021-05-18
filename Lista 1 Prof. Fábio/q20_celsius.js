// Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

const prompt = require('prompt-sync')();

// Entrada

var C = Number(prompt("Qual a temperatura(°C) que será convertida para(°F)?: "));

// Processamento

var F = (9 * C + 160)/5;

// Saída

console.log("A temperatura(°C)",C,"será(°F):",F.toFixed(0))
