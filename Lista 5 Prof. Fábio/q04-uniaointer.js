// Leia 2 vetores A e B com N elementos, escreva e escreva um vetor C, que represente o conjunto união entre os vetores A e B; e um vetor D, que represente o conjunto interseção entre os vetores A e B.

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
    var vetor_d = [vetor_a-vetor_b]
    console.log(vetor_c)
    console.log(vetor_d)
}
main();