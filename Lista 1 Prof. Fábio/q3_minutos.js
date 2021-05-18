//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

const prompt = require('prompt-sync')();

//Entrada

const tempo = Number(prompt('Quantos minutos: '));

//Processamento

const horas = (tempo)/60;
const minutos = (horas%1)*60;

//Saída
 
console.log('Seu resultado é de',Math.floor(horas).toFixed(2),'horas e',minutos.toFixed(2),'minutos.')
