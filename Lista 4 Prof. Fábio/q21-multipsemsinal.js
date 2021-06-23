// Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*) seja utilizado.

const prompt = require('prompt-sync')();

function main(){
    var A = Number(prompt("Qual o valor do primeiro número?: "))
    var B = Number(prompt("Qual o valor do segundo número?: "))
    var n_vezes = B
    var A2 = A
    while(n_vezes != 1){
        A = A2 + A
        n_vezes--
    }
    console.log("Resultado:",A)
}
main();