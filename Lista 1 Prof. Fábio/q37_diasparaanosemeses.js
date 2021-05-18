// Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

const prompt = require('prompt-sync')();

// Entrada

var dias = Number(prompt("Qual sua idade expressa em dias?: "));

// Processamento

var anos = (dias / 365);
var meses = (((anos%1)*365)/30);
var dias = ((meses%1)*30);

// Saída

console.log("De acordo com os dias fornecidos, você tem aproximadamente",Math.floor(anos),"anos,",Math.floor(meses),"meses e",Math.floor(dias),"dias.");