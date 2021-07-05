// Leia um vetor A com N elementos e escreva um vetor B, com os mesmos elementos de A, sendo que estes deverão estar invertidos, ou seja, o 1o elemento de A deve ser o último elemento de B; o 2o elemento de A deve ser o penúltimo elemento de B e assim por diante.

const prompt = require('prompt-sync')();

function main(){
    var numeros = []
    var invertidos = []
    var n = Number(prompt("Qual o valor de N?: "))
    for(let i=1;i<n;i++){
        numeros[i] = i
        invertidos[i] = i
    }
    var inverse = invertidos.reverse();
    console.log(numeros,inverse)
}
main();