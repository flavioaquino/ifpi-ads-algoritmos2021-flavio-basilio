// Leia um valor em real (R$), calcule e escreva 70% deste valor.

const prompt = require('prompt-sync')();


// Entrada

const valorI = Number(prompt("Escreva o seu salário inicial: ")) 

// Processamento

const valorF = valorI * 0.7;


// Saída

console.log('O seu valor com sendo reduzido para 70%, passará a ser de R$',valorF.toFixed(2),"reais.")
