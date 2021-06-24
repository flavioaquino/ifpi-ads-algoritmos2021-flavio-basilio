// Escreva um algoritmo que leia o nome de um produto, o preço e a quantidade comprada. Escreva o nome do produto comprado e o valor total a ser pago, considerando que são oferecidos descontos pelo número de unidades compradas, segundo a tabela abaixo: (FLAG: nome do produto = “FIM”). a. Até 10 unidades: valor total b. de 11 a 20 unidades: 10% de desconto c. de 21 a 50 unidades: 20% de desconto d. acima de 50 unidades: 25% de desconto

const prompt = require('prompt-sync')();

function main(){
    while(nome!="FIM"){
        var nome = String(prompt("Qual o nome do produto?: "))
        var preco = Number(prompt("Qual o preço do produto?: "))
        var quantidade = Number(prompt("Qual a quantidade que foi comprada?: "))
        var valor
        var valoru = preco*quantidade
        if(quantidade<=10){
            valor = valoru
        }else if(quantidade>10){
            valor = valoru-(valoru*0.1)
        }else if(quantidade>20){
                valor = valoru-(valoru*0.2)
        }else if(quantidade>50){
            valor = valoru-(valoru*0.25)
        }
        if(nome=="FIM"){
            console.log("Encerrando...")
        }else{
        console.log(nome,"x",quantidade,"\nValor a ser pago: R$",valor.toFixed(2),"Reais.")}
    }
}
main();