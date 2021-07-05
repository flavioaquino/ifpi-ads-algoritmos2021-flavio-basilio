// Leia um vetor com N elementos, encontre e escreva o maior e o menor elemento e suas respectivas posições no vetor.

const prompt = require('prompt-sync')();

function main(){
    var vetor = []
    var maior_num = 0
    var menor_num = 99999999
    var maior_pos = 0
    var menor_pos = 0
    var N = Number(prompt('Informe o número de elementos do vetor: '))
    for(let i=0;i<N;i++){
        console.log('Informe o elemento',i+1)
        vetor[i] = Number(prompt('= '))
    }
    for(let x=0;x<N;x++){
        if(vetor[x]>maior_num){
            maior_num = vetor[x]
            maior_pos = x
        }
        if(vetor[x]<menor_num){
            menor_num = vetor[x]
            menor_pos = x
        }
    }
    console.log('Maior elemento:',maior_num,'Posição:',maior_pos,'\nMenor elemento:',menor_num,'Posição:',menor_pos)
}
main();