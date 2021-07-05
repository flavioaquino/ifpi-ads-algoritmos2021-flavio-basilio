// Leia um vetor A com 20 elementos, calcule e escreva o valor de S. S = (A[1] - A[20])2 + (A[2] - A[19])2 + ... + (A[9] - A[12])2 + (A[10] - A[11])2

const prompt = require('prompt-sync')();

function main(){
    var vetor = []
    var n = 20
    console.log('O vetor deve conter 20 elementos.')
    for(let i=0;i<n;i++){
        console.log('Informe qual o elemento',i+1)
        vetor[i] = Number(prompt('= '))
    }
    var s = 0
    for(let x = 0;x<20;x++){
        s = Number(s + (vetor[0+x]-vetor[20-x])*(vetor[0+x]-vetor[20-x]))
        console.log((vetor[0+x]-vetor[20-x]))
    }
    console.log(s)
}
main();