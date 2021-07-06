// Leia 3 (três) números e escreva-os em ordem crescente.

const prompt = require('prompt-sync')();

// Entrada

var num1 = Number(prompt('Informe o primeiro número: '));
var num2 = Number(prompt('Informe o segundo número: '));
var num3 = Number(prompt('Informe o terceiro número: '));

// Processamento

var maior;
var medio;
var menor;

if(num1>num2 && num1>num3){
    maior = num1
}else if(num2>num1 && num2>num3){
    maior = num2
}else if(num3>num1 && num3>num2){
    maior = num3
}
if(num1<num2 && num1<num3){
    menor = num1
}else if(num2<num1 && num2<num3){
    menor = num2
}else if(num3<num1 && num3<num2){
    menor = num3
}
if(num1>menor && num1<maior){
    medio = num1
}else if(num2>menor && num2<maior){
    medio = num2
}else if(num3>menor && num3<maior){
    medio = num3
}

// Saída

console.log(maior,medio,menor)
