// Leia um valor em km, calcule e escreva o equivalente em m.

const prompt = require('prompt-sync')()

// Entrada

const km = Number(prompt("Qual o valor em KM que será transformado em M?: "))

// Processamento

var m = km * 1000;

// Saída

console.log(km,"quilômetros equivalem a",m,"metros.");
