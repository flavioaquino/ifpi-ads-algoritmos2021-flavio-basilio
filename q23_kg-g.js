// Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

const prompt = require('prompt-sync')();

// Entrada

const kg = Number(prompt("Qual o valor em Kg que será convertido para g?: "));

// Processamento

var g = (kg * 1000);

// Saída

console.log(kg,"quilogramas equivalem a",g,"gramas.");