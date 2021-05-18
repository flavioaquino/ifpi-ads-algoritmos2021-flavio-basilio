// Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

const prompt = require('prompt-sync')();

// Entrada

var dias = Number(prompt("Quantos dias você deseja transformar em semanas?: "));

// Processamento

var semanas = (dias/7)
var diasR = (semanas%1)*7

// Saída

console.log(dias,"dias correspondem a",Math.floor(semanas),"semanas e",Math.floor(diasR),"dias.")