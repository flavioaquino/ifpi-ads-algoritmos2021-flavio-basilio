// Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

const prompt = require('prompt-sync')();

// Entrada

const m = Number(prompt("Quantos Metros(M) você deseja transformar para Quilômetros(Km)?: "))

// Processamento

var k = (m / 1000)
var mF = (k % 1) *1000

// Saída

console.log(m,"metros equivalem a",Math.floor(k),"quilômetro(s) e",mF,"metro(s).");
