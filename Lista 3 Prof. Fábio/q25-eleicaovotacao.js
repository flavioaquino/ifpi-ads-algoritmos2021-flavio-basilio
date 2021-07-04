// Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos. Os dados utilizados para a contagem dos votos obedecem à seguinte codificação: · 1, 2, 3 = voto para os respectivos candidatos; · 9 = voto nulo; · 0 = voto em branco; Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
// a) total de votos para cada candidato;
// b) total de votos nulos;
// c) total de votos em branco;
// d) quem venceu a eleição.

const prompt = require('prompt-sync')();

function main(){
    var N = Number(prompt("Informe o número de eleitores(N): "))
    var candidato1 = 0
    var candidato2 = 0
    var candidato3 = 0
    var nulo = 0
    var branco = 0
    for(let i=1;i!=N+1;i++){
        console.log('-- Eleitor',i,'--')
        var voto = Number(prompt("Informe o seu voto: "))
        if(voto==1){
            candidato1++
        }else if(voto==2){
            candidato2++
        }else if(voto==3){
            candidato3++
        }else if(voto==9){
            nulo++
        }else if(voto==0){
            branco++
        }
    }
    if(candidato1>candidato2 && candidato1>candidato3){
        ganhador='Candidato 1'
    }else if(candidato2>candidato1 && candidato2>candidato3){
        ganhador='Candidato 2'
    }else if(candidato3>candidato1 && candidato3>candidato2){
        ganhador='Candidato 3'
    }

    console.log('Número de votos para o candidato 1:',candidato1,'\nNúmero de votos para o candidato 2:',candidato2,'\nNúmero de votos para o candidato 3:',candidato3,'\nNúmero de votos Nulo:',nulo,"\nNúmero de votos em Branco:",branco,'\nGanhador da eleição:',ganhador)
}
main()