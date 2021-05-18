// Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

const prompt = require('prompt-sync')();

// Entrada

var idade = Number(prompt("Qual a idade em anos que você deseja transformar para dias?: "));
var idade1 = Number(prompt("E quantos meses?: "));
var idade2 = Number(prompt("E dias?: "));

// Processamento

var dias = idade2;
var meses = idade1;
var anos = idade;

var mesesF = (meses * 30);
var anosF = (anos * 365);

var soma = (anosF + mesesF + dias);

// Saída

console.log("O tempo de vida anteriormente indicado equivale a",soma,"dias de vida.");