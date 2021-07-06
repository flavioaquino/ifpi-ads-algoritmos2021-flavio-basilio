// Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente do algarismo da unidade.

const prompt = require('prompt-sync')();

// Entrada

var num = String(prompt("Informe um número de 02 dígitos: "))

// Processamento & Saída

if(num[0]==num[1]){
    console.log('O dígito das dezenas é igual ao dígito das unidades!')
}else{
    console.log('O dígito das dezenas NÃO é igual ao dígito das unidades!')
}