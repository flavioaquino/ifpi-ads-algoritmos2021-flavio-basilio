// Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o critério da distribuição ótima.

const prompt = require('prompt-sync')();

// Entrada

var valor = Number(prompt("Qual o valor que você deseja retirar?: "));

// Processamento

var resultado1 = (valor/200)
var resultado2 = ((resultado1%1)*200)/100;
var resultado3 = ((resultado2%1)*100)/50;
var resultado4 = ((resultado3%1)*50)/20;
var resultado5 = ((resultado4%1)*20)/10;
var resultado6 = ((resultado5%1)*10)/5;
var resultado7 = ((resultado6%1)*5)/2;

// Saída

console.log("Você receberá aproximadamente",Math.floor(resultado1),"nota(s) de 200 Reais e",Math.floor(resultado2),"nota(s) de 100 Reais e",Math.floor(resultado3),"nota(s) de 50 Reais e",Math.floor(resultado4),"nota(s) de 20 Reais e",Math.floor(resultado5),"nota(s) de 10 Reais e",Math.floor(resultado6),"nota(s) de 5 Reais e",Math.floor(resultado7),"nota(s) de 2 Reais.");
