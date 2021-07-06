// Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).

const prompt = require('prompt-sync')();

// Entrada

var lad1 = Number(prompt("Qual o primeiro lado?: "))
var lad2 = Number(prompt("Qual o segundo lado?: "))
var lad3 = Number(prompt("Qual o terceiro lado?: "))

// Processamento

if(lad1+lad2>lad3){
    if(lad1==lad2 && lad2==lad3){
        console.log('O triângulo é equilátero')
    }else if(lad1==lad2 || lad2==lad3 || lad1==lad3){
        console.log('O triângulo é isósceles')
    }else if(lad1!=lad2 && lad2!=lad3 && lad1!=lad3)
        console.log('O triângulo é escaleno')
}else{console.log('A soma dos lados não forma um triângulo')}