// Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e responda quem ganha a partida. A partida chega ao final se:

const prompt = require('prompt-sync')();

function main(){
    // Entrada 
    var ponto1 = 0;
    var ponto2 = 0;
    while((ponto1 < 21 || (ponto1 - ponto2) < 2) && (ponto2 < 21 || (ponto2 - ponto1) < 2)){
        console.log("### Quem marcou o ponto? ###")
        var resposta = prompt("Resposta: ")
    // Processamento
        if(resposta == 1){
            ponto1++
        }else if(resposta == 2){
            ponto2++
        }else{
            console.log("Responda apenas 1 ou 2!")
        }
    }
    if(ponto1 == 21){
        console.log("O jogador 1 ganhou a partida!")
    }else if(ponto2 == 21){
        console.log("O jogador 2 ganhou a partida!")
    }
}
main()