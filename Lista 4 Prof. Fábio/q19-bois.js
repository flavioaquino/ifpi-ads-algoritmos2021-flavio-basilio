// Em um frigorífico, cada boi traz em seu pescoço um cartão contendo o seu n.o de identificação e seu peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o n.o de identificação e o peso do boi mais magro e do boi mais gordo. (Flag: n.o identificação=0)-

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var mais_pesado = 0
    var mais_pesado_n = 0
    var mais_leve = 100000
    var mais_leve_n = 0
    console.log('Para parar o processo, digite "0" ')
    while(n_ident != "0"){
        var n_ident = Number(prompt("Qual o número de identificação do boi?: "))
        var peso = Number(prompt("Qual o peso do boi?(KGs): "))
        if(peso < mais_leve){
            mais_leve = peso
            mais_leve_n = n_ident
        }
        if(peso > mais_pesado){
            mais_pesado = peso
            mais_pesado_n = n_ident
        }
    }
    console.log("O boi mais leve é o boi com o N°:",mais_leve_n,", com o peso de",mais_leve,"KGs\nO boi mais pesado é o boi com o N°:",mais_pesado_n,", com o peso de",mais_pesado,"KGs.")
}
main();
