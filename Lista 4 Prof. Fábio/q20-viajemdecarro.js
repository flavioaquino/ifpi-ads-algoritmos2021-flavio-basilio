// Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de 600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações: · Distância percorrida desde a última medição; · Quantidade de litros consumidos para percorrer a distância indicada. Escreva um algoritmo que leia estas informações e escreva:· se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km);· se o carro parou antes de chegar por falta de combustível (consumo igual a 50 litros);· o consumo em km/l do carro.

const prompt = require('prompt-sync')();
function main(){
    var dis_perc = Number(prompt("Qual a distância percorrida desde a última medição?: "))
    var comb_consum = Number(prompt("Qual a quantidade de combustível consumido para percorrer a distância indicada?: "))
    var tanque = 50
    var consumo = dis_perc / comb_consum
    while(dis_perc < 600 || comb_consum <= 50){
        dis_perc = Number(prompt("Qual a distância percorrida desde a última medição?: "))
        comb_consum = Number(prompt("Qual a quantidade de combustível consumido para percorrer a distância indicada?: "))
        if(dis_perc >= 600){
            console.log("Foi possível chegar ao destino! Km/L:",consumo)
        }else if(comb_consum >= 50){
            console.log("Não foi possível chegar ao destino! Km/L:",consumo)
        }else{
            console.log("Refaça a consulta!")
        }
    }
}
main();