// Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração.

const prompt = require('prompt-sync')();

// Entrada

var nom1 = Number(prompt("Qual o numerador da primeira fração?: "))
var denom1 = Number(prompt("Qual o denominador da primeira fração?: "))
var nom2 = Number(prompt("Qual o numerador da segunda fração?: "))
var denom2 = Number(prompt("Qual o denominador da segunda fração?: "))

// Processamento

function calculaMmc(denom1, denom2) {
    var resto, x, y;
    x = denom1;
    y = denom2;
    while(resto!=0){
      resto = x % y;
      x = y;
      y = resto;
    }
    return (denom1*denom2)/x;
}

var nomF = (nom1+nom2)


// Saída

console.log(nomF,"/",calculaMmc(denom1, denom2));