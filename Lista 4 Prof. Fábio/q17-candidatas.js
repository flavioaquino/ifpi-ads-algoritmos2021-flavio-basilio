// Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM').

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    console.log('Quando desejar encerrar os cadastros, escreva "FIM"')
    var candidatas = 0;
    var mais_alta = 0;
    var mais_alta_nome = 0;
    var mais_baixa = 1000;
    var mais_baixa_nome = 0;
    var mais_magra = 1000;
    var mais_magra_nome = 0;
    var mais_gorda = 0;
    var mais_gorda_nome = 0;

    while(nome != "FIM"){
        console.log("## Próxima Candidata ##")
        var nome = prompt("Qual o nome da candidata?: ")
        var peso = Number(prompt("Qual o peso da candidata?(Kg): "))
        var altura = Number(prompt("Qual a altura da candidata?(Cm): "))
    // Processamento
        if(peso > mais_gorda){
            mais_gorda = peso
            mais_gorda_nome = nome
        }
        if(peso < mais_magra){
            mais_magra = peso
            mais_magra_nome = nome
        }
        if(altura > mais_alta){
            mais_alta = altura
            mais_alta_nome = nome
        }
        if(altura < mais_baixa){
            mais_baixa = altura
            mais_baixa_nome = nome
        }    
    }
    // Saída
    console.log("A candidata mais alta é a:",mais_alta_nome,"com",mais_alta,"Cms\nA candidata mais baixa é a:",mais_baixa_nome,"com",mais_baixa,"Cms\nA candidata mais gorda é a:",mais_gorda_nome,"com",mais_gorda,"Kgs\nA candidata mais magra é a:",mais_magra_nome,"com",mais_magra,"Kgs")
}
main()


