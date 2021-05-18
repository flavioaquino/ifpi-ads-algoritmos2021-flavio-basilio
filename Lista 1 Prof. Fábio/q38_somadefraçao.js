// Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração.

const prompt = require('prompt-sync')();

// Entrada

var nom1 = Number(prompt("Qual o numerador da primeira fração?: "))
var denom1 = Number(prompt("Qual o denominador da primeira fração?: "))
var nom2 = Number(prompt("Qual o numerador da segunda fração?: "))
var denom2 = Number(prompt("Qual o denominador da segunda fração?: "))

// Processamento

den = denom1*denom2
num = ((den/denom1)*nom1)+((den/denom2)*nom2);

var nomF = (nom1+nom2)


// Saída

console.log("A soma das frações é igual à: ",num,"/",den);
