// Leia N, calcule e escreva o valor de S.

const prompt = require('prompt-sync')();

function main(){
    var cima = 1
    var soma = 0
    for(let i = 1;i<50;i++){
        soma += (cima/i)
        cima += 2
    }
    console.log(soma)
}
main();