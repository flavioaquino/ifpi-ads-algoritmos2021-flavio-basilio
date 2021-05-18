// Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

const prompt = require('prompt-sync')();

// Entrada

var dolar = Number(prompt('Qual é o valor atual do Dólar?: '))
var vdolar = Number(prompt('Quantos dólares você deseja transformar para Real?: '))

// Processamento

var fdolar = dolar * vdolar;

// Saída

console.log('Você tem o equivalente a R$',fdolar.toFixed(2),'Reais.')
