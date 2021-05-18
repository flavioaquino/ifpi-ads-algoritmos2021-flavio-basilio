// Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

const prompt = require('prompt-sync')();

// Entrada

var F = Number(prompt("Qual a temperatura(°F) que será transformada para °C?: "));

// Processamento

var C = (5 * F - 160)/ 9;

// Saída

console.log("A temperatura(°F)",F,"°F, quando transformada para °C, se tornará",C.toFixed(0),"°C.")
