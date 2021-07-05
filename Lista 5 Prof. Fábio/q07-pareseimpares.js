// Leia um vetor A de N elementos e escreva um vetor B de N elementos, conforme a seguinte condição: se índice de A[índice] é par então B[índice] = 0, caso contrário B[índice] = 1.

const prompt = require('prompt-sync')();

function main(){
    var vetor_a = []
    var vetor_b = []
    var N = Number(prompt('Informe o número de elementos dos vetores A e B: '))
    for(let i=0;i<N;i++){
        console.log('Para A, informe o elemento',i+1)
        vetor_a[i] = String(prompt('= '))
    }
    for(let x=0;x<N;x++){
        if(vetor_a[x]%2==0){
            vetor_b[x] = 0
        }else if(vetor_a[x]%2!==0){
            vetor_b[x] = 1
        }
    }
    console.log('Vetor A:',vetor_a,'\nVetor B:',vetor_b)
}
main();