// O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.

const prompt = require('prompt-sync')();

// Entrada

var custoDF = Number(prompt("Qual o custo de fábrica do carro desejado?: "));

// Processamento

var impostos = (custoDF*45)/100;
var distribuidor = ((custoDF+impostos)*28)/100;
var soma = (impostos + distribuidor);
var resultado = soma + custoDF;

// Saída

console.log("O valor do carro adicionado com as porcentagens do distribuidor e dos impostos ficará: R$",resultado.toFixed(2),"reais.");