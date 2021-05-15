// Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

const prompt = require('prompt-sync')()

// Entrada

var meses = Number(prompt("Quantos meses você deseja transformar em anos?: "));

// Processamento

var anos = meses/12;
var mesesF = (anos%1)*12;
var anosF = Math.floor(anos);

// Saída

console.log(meses,"meses equivalem a",anosF,"anos e",mesesF.toFixed(0),"meses.")