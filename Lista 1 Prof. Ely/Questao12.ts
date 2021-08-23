var prompt = require('prompt-sync')();

var entrada = Number(prompt("Informe o tempo em segundos: "))

var horas = entrada/3600
var minutos = (horas%1)*60
var segundos = (minutos%1)*60

console.log(entrada,`segundos no formato desejado: ${Math.floor(horas)}:${Math.floor(minutos)}:${Math.floor(segundos)}`)
