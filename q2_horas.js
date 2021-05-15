// Leia um valor em horas e um valor em minutos e transforme em minutos

const prompt = require('prompt-sync')();

// Entrada

const horas = Number(prompt('Quantas horas?: '));
const minutos = Number(prompt('E quantos minutos?: '));

// Processamento

const minutosF = (horas * 60) + minutos;

// Saída

console.log(horas, 'horas e', minutos, 'minutos equivalem a ', minutosF, 'minutos.');