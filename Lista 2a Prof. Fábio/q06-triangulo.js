// Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a
// 180o). Se formam, verifique se formam um triângulo acutângulo (3 ângulos < 90o), retângulo (1 ângulo = 90o) ou obtusângulo (1 ângulo > 90o). Não existe ângulo com tamanho 0o (zero grau)

const prompt = require('prompt-sync')();

// Entrada

var lad1 = Number(prompt("Qual o primeiro ângulo?: "))
var lad2 = Number(prompt("Qual o segundo ângulo?: "))
var lad3 = Number(prompt("Qual o terceiro ângulo?: "))

// Processamento

if((lad1+lad2+lad3)==180){
    if(lad1<90 && lad2<90 && lad3<90){
        console.log('O triângulo é acutângulo')
    }else if(lad1==90 || lad2==90 || lad3==90){
        console.log('O triângulo é retângulo')
    }else if(lad1>90 || lad2>90 || lad3>90)
        console.log('O triângulo é obtusângulo')
}else{console.log('A soma dos ângulos não forma um triângulo')}