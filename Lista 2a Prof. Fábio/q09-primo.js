// Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

const prompt = require('prompt-sync')();

// Entrada

var num = Number(prompt("Qual o número que será verificado?: "))

// Processamento & saída

if(num === 2 || num === 3 || num === 5 || num === 7 || num === 11 || num === 13 || num === 17 || num === 19 || num === 23 || num === 29 || num === 31 || num === 37 || num === 41 || num === 43 || num === 47 || num === 53 || num === 59 || num === 61 || num === 67 || num === 71 || num === 73 || num === 79 || num === 83 || num === 89 || num === 97) {                                                                                                           
    console.log("O número",num,"é primo !")
}else{
    console.log("O número",num,"não é primo!")
}