// Leia N e escreva todos os números inteiros de 1 a N.

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var N = Number(prompt("Digite um valor para N: "))
    // Processamento
    for(let i = 1; i != N; i++){
    // Saída
    console.log(i)
    }
    console.log('N =',N)
}
main()