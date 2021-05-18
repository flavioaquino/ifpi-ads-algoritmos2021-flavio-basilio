// Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

const prompt = require('prompt-sync')();

// Entrada

var nota1 = Number(prompt("Qual a sua nota 1?: "));
var nota2 = Number(prompt("Qual a sua nota 2?: "));
var nota3 = Number(prompt("Qual a sua nota 3?: "));

var pes1 = Number(prompt("Qual o peso da nota 1?: "));
var pes2 = Number(prompt("Qual o peso da nota 2?: "));
var pes3 = Number(prompt("Qual o peso da nota 3?: "));

// Processamento

var pesF = pes1 + pes2 + pes3
var notaF = ((nota1 * pes1) + (nota2 * pes2) + (nota3 * pes3))/ pesF;

// Saída

console.log("Sua média ponderada das notas multiplicadas pelo peso anteriormente informados é de",Number(notaF.toFixed(2)),'pontos.')