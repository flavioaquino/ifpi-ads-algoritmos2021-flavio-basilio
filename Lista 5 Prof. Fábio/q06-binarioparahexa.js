// Leia um número (vetor com 8 elementos) na base binária, calcule e escreva este número na base hexadecimal e na base decimal.

const prompt = require('prompt-sync')();

function main(){
    var vetor = []
    var n = 8
    console.log('Escreva o número em binário com 8 dígitos.')
    for(let i=0;i<n;i++){
        console.log('Informe qual o dígito',i+1)
        vetor[i] = String(prompt('= '))
    }
    var bin = ''
    for(let x=0;x<n;x++){
        bin = bin + vetor[x]
    }
    var deci = parseInt(bin,2)
    var hexa = deci.toString(16)
    console.log('Hexadecimal:',hexa,'\nDecimal:',deci)
}
main();