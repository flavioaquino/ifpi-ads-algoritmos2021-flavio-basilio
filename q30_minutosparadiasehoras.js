// Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.

const prompt = require('prompt-sync')() 

// Entrada

var minutos = Number(prompt("Quantos minutos você deseja transformar em dias e horas?: "));

// Processamento

var horas = (minutos/60);
var dias = (horas/24);
var horasF = (dias%1)*24
var diasF = Math.floor(dias);
var minutosF = (horas%1)*60

// Saída

console.log(minutos,"minutos equivalem a",diasF,"dias,",horasF.toFixed(0),"horas e",minutosF.toFixed(0),"minutos.");