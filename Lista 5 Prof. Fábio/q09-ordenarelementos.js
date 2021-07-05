// Leia um vetor com N elementos, ordene-o e escreva-o em ordem crescente.

const prompt = require('prompt-sync')();

function main(){
    var vetor = []
    var N = Number(prompt('Informe quantos elementos o vetor possui: '))
    for(let i = 0;i<N;i++){
        console.log('Informe o elemento',i+1)
        vetor[i] = String(prompt('= '))
    }
    function compararNumeros(a, b) {
        return a - b;
    }
    console.log('Vetor ordenado:', vetor.sort(compararNumeros));
}
main();