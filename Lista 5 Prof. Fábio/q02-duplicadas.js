// Leia um vetor A com N elementos, verifique e escreva se existem ou não elementos iguais no vetor.

const prompt = require('prompt-sync')();

function main(){
    var numeros = []
    var n = Number(prompt("Qual o número de elementos(N)?: "))
    for(let i=0;i<n;i++){
        numeros[i] = Number(prompt('Informe qual o próximo elemento: '))
    }
    function hasDuplicates(array) {
        return String((new Set(array)).size !== array.length);
    }
    if(hasDuplicates(numeros)=='false'){
        console.log('Não há elementos duplicados!')
    }else if(hasDuplicates(numeros)=='true'){
        console.log('Existem elementos duplicados!')
    }
}
main();