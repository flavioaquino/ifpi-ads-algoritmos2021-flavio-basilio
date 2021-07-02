// Leia N, calcule e escreva o valor de S.

const prompt = require('prompt-sync')();

function main(){
    var resul = 0
    var sub = 0
    var soma = 0
    var resposta = 0
    var N = Number(prompt("Informe o valor de N: "))
    for(let i=1;i!=N;i++){
        resul = resul - ((1/N)-(1/N+1)+(1/N+2))
    }
    console.log(resul-3)
}
main();