// Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.
// D = Math.sqrt(X2-X1)² + (Y2-Y1)²

const prompt = require('prompt-sync')();

// Entrada

var ponto1 = prompt('Quais as coordenadas do ponto 1?(Formato: x y):');
var ponto2 = prompt('Quais as coordenadas do ponto 2?(Formato: x y):');

// Processamento

var x1 = ponto1[0];
var y1 = ponto1[2];
var x2 = ponto2[0];
var y2 = ponto2[2];

var resultado = Math.sqrt(((x2-x1)*(x2-x1)) + ((y2-y1)*(y2-y1)));

// Saída

console.log('A distância obtida a partir dos pontos informados é aproximadamente:',resultado.toFixed(2));