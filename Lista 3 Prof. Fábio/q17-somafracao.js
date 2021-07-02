// Leia N, calcule e escreva o valor de S.

const prompt = require('prompt-sync')();

function main(){
    var soma = 0
    var resposta = 0
    var N = Number(prompt("Informe o valor de N: "))
    for(let i=1;i!=N;i++){
        soma = soma + (1/i)
        resposta = soma
    }
    console.log(resposta)
}
main();