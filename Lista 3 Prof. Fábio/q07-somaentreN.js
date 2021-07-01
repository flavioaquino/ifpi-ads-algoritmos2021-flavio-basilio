// Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var N = Number(prompt("Informe o valor que você deseja para N: "))
    var resul = 0
    for(let i=0;i<N;i++){
        resul = resul + i
    }
    console.log(resul-1)
}
main();