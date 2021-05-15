// Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.

const prompt = require('prompt-sync')()

// Entrada

var horas = Number(prompt("Quantas horas você deseja transformar em dias e semanas?"));

// Processamento

var dias = (horas/24);
var semanas = (dias/7);
var diasF = ((semanas%1)*7);
var semanasF = Math.floor(semanas);
var horasF = ((dias%1)*24)

// Saída

console.log(horas,"horas equivalem a aproximadamente",semanasF,"semanas,",diasF.toFixed(0),"dias e",horasF.toFixed(0),"horas.");