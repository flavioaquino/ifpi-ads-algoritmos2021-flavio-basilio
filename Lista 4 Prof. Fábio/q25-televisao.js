//Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora, mostrando ao final, o número de cada canal e sua respectiva audiência.

const prompt = require('prompt-sync')();

function main(){
    var canal2 = 0
    var canal4 = 0
    var canal5 = 0
    var canal7 = 0
    var canal10 = 0
    console.log('Responda "0" para o fim da pesquisa.')
    while(ask != 0){
        var ask = Number(prompt("Qual o seu canal mais assistido?: "))
        if(ask == 2){
            canal2++
            console.log("Voto computado! Próximo!")
        }else if(ask == 4){
            canal4++
            console.log("Voto computado! Próximo!")
        }else if(ask == 5){
            canal5++
            console.log("Voto computado! Próximo!")
        }else if(ask == 7){
            canal7++
            console.log("Voto computado! Próximo!")
        }else if(ask == 10){
            canal10++
            console.log("Voto computado! Próximo!")
        }else if(ask == 0){
            console.log("Fim da pesquisa!")
        }else{
            console.log("Opção inválida!")
            console.log("Voto não computado! Tente novamente!")
        }
        
    }
    console.log("Votos para o canal 2:",canal2,"\nVotos para o canal 4:",canal4,"\nVotos para o canal 5:",canal5,"\nVotos para o canal 7:",canal7,"\nVotos para o canal 10:",canal10)
}
main()