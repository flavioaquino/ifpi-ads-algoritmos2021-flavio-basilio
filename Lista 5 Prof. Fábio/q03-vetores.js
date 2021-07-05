// Leia 2 vetores A e B com N elementos, escreva um vetor C, sendo este a junção dos vetores A e B. Desta forma, o vetor C deverá ter 2*N elementos.

const prompt = require('prompt-sync')();

function main(){
    var vetor_a = []
    var vetor_b = []
    var n = Number(prompt("Qual o número de elementos(N)?: "))
    console.log('Vetor A')
    for(let i=0;i<n;i++){
        console.log('Informe qual o elemento',i+1)
        vetor_a[i] = Number(prompt('= '))
    }
    console.log('Vetor B')
    for(let i=0;i<n;i++){
        console.log('Informe qual o elemento',i+1)
        vetor_b[i] = Number(prompt('= '))
    }
    var vetor_c = [vetor_a+','+vetor_b]
    console.log(vetor_c)
}
main();