// Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação, nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o numero de identificação e o peso do boi mais magro e do boi mais gordo.

const prompt = require('prompt-sync')();

function main(){
    var N = Number(prompt("Informe o número de bois(N): "))
    var magro = 0
    var magro_nome = 0
    var gordo = 0
    var gordo_nome = 0
    for(let i=0;i<N;i++){
        var nome = String(prompt("Informe o nome do boi: "))
        var peso = Number(prompt("Informe o peso do boi(KGs): "))
        if(peso>gordo){
            gordo = peso
            gordo_nome = nome
        }else if(peso<magro){
            magro = peso
            magro_nome = nome
        }
    }
    console.log('O boi mais magro é o boi',magro_nome,'com',magro,'KGs.\nO boi mais gordo é o boi',gordo_nome,'com',gordo,'KGs.')
}
main();