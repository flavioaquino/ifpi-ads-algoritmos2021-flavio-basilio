// Questão 4 - Talão de Energia

const prompt = require("prompt-sync")();
         
function main(){

    // Entrada

    var leitura_anterior = Number(prompt("Qual foi a sua leitura anterior de energia?(KWh): "))
    var leitura_atual = Number(prompt("Qual é a sua leitura atual de energia?(KWh): "))

    // Processamento

    if(consumo>=80){
        var ilumin = (tarifa * 6)/100
    }else{
        var ilumin = 0
    }

    var consumo = leitura_atual - leitura_anterior
    if(consumo<=30){
        var tarifa = 0
    }
    else if(consumo<=100){
        var tarifa = consumo * 0.59
        var icms = tarifa/4
        var pis = (tarifa * 15)/100
        var bandeiras = Math.floor(consumo/100)
        var taxa_bandeira = bandeiras*8
        var conta = tarifa + icms + pis + taxa_bandeira + ilumin
        
    }
    else if(consumo>100){
        var tarifa = consumo * 0.75
        var icms = tarifa/4
        var pis = (tarifa * 15)/100
        var bandeiras = Math.floor(consumo/100)
        var taxa_bandeira = bandeiras*8
        var conta = tarifa + icms + pis + taxa_bandeira + ilumin
    }
    // Saída
    
    if(consumo<=30){
        console.log("O usuário consumiu menos de 30 KWh, logo está isento de tarifas.")
    }
    else if(consumo<=100){
        console.log("Consumo:",consumo.toFixed(2),"KWh\nValor Tarifa: R$",tarifa.toFixed(2),"Reais\nBandeira: R$",taxa_bandeira.toFixed(2),"Reais (",bandeiras,"bandeira(s)\nICMS: R$",icms.toFixed(2),"Reais\nPIS/CONFIS: R$",pis.toFixed(2),"Reais\nTaxa Iluminação: R$",ilumin.toFixed(2),"Reais\nCONTA: R$",conta.toFixed(2),"Reais.")
    }
    else if(consumo>100){
        console.log("Consumo:",consumo.toFixed(2),"KWh\nValor Tarifa: R$",tarifa.toFixed(2),"Reais\nBandeira: R$",taxa_bandeira.toFixed(2),"Reais (",bandeiras,"bandeira(s)\nICMS: R$",icms.toFixed(2),"Reais\nPIS/CONFIS: R$",pis.toFixed(2),"Reais\nTaxa Iluminação: R$",ilumin.toFixed(2),"Reais\nCONTA: R$",conta.toFixed(2),"Reais.")
    }
}
main();