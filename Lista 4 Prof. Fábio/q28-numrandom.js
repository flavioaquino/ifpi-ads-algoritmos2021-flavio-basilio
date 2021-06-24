// Escreva um algoritmo que gere um número aleatório inteiro (utilize a função rand(): aleatorio = rand()) e solicite um número ao usuário. O objetivo é que o usuário acerte o número gerado. Se o número digitado for menor que o gerado, escreva “Maior”, se for maior, escreva “Menor”, e solicite novamente um número ao usuário. Repita este processo ate que o usuário acerte o número gerado. Após isso, escreva em quantas tentativas o usuário acertou.

const prompt = require('prompt-sync')();

function main(){
    var tentativas = 0
    var num_aleatorio = rand()
    while(num!=num_aleatorio){
        var num = Number(prompt("Qual o número?: "))
        if(num>num_aleatorio){
            console.log("Insira um valor menor!")
        }else if(num<num_aleatorio){
            console.log("Insira um valor maior!")
        }
        tentativas++
    }
    console.log("Parabéns! Você acertou o número após",tentativas,"tentativas!")
}

function rand(min, max){
    min = 1
    max = 100
    return Math.floor(Math.random() * (max - min) + min)
}
main();