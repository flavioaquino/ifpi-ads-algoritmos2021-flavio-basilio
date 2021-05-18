// Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo;Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.
//c = (a*x) + (b*y) ; f = (d*x) + (e*y) ; x = ((c*e) - (b*f))/((a*e) - (b*d)) ; y = ((a*f) - (c*d))/((a*e) - (b*d))

const prompt = require('prompt-sync')();

// Entrada

var a = Number(prompt("Qual o valor de A?: "));
var b = Number(prompt("Qual o valor de B?: "));
var c = Number(prompt("Qual o valor de C?: "));
var d = Number(prompt("Qual o valor de D?: "));
var e = Number(prompt("Qual o valor de E?: "));
var f = Number(prompt("Qual o valor de F?: "));

// Processamento

var x = ((c*e) - (b*f))/((a*e) - (b*d));
var y = ((a*f) - (c*d))/((a*e) - (b*d));

// Saída

console.log("O valor de x é:",x,"e o valor de y é:",y);
