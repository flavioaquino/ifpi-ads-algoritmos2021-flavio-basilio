// Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.

const prompt = require('prompt-sync')()

// Entrada

const seg = Number(prompt("Quantos segundos você deseja transformar para minutos e horas?: "));

// Processamento

var min = (seg / 60);
var horas = ((seg / 60)/ 60);
var segF = (min%1) *60;
var minF = (horas%1)*60 ;
var horasF = Math.floor(horas);

// Saída

console.log(seg,"segundos correspondem a",horasF,"hora(s),",minF.toFixed(0),"minuto(s) e",segF.toFixed(0),"segundo(s).");