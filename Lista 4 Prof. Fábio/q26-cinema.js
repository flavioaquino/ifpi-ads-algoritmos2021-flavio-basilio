// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme (1=ótimo, 2=bom, 3=regular, 4=péssimo). Escreva um algoritmo que leia a idade e a opinião das pessoas, calcule e mostre ao final: (FLAG: idade = -1). · a média das idades das pessoas que responderam ótimo; · a quantidade de pessoas que respondeu regular; · o percentual de pessoas que respondeu bom entre os entrevistados.

const prompt = require('prompt-sync')();

function main(){
    var nota1 = 0
    var nota2 = 0
    var nota3 = 0
    var nota4 = 0
    var idades = 0
    var media = 0
    console.log('Questionário sobre o filme. Notas: 1=ótimo, 2=bom, 3=regular, 4=péssimo. Responda "-1" para o fim da pesquisa.')
    while(ask != -1){
        var ask = Number(prompt("Qual a sua nota para o filme assistido?: "))
        var idade = Number(prompt("Qual a sua idade?: "))
        if(ask == 1){
            idades = idades + idade
            nota1++
            console.log("Voto computado! Próximo!")
        }else if(ask == 2){
            nota2++
            console.log("Voto computado! Próximo!")
        }else if(ask == 3){
            nota3++
            console.log("Voto computado! Próximo!")
        }else if(ask == 4){eee
            nota4++
            console.log("Voto computado! Próximo!")
        }else if(ask == -1){
            console.log("Fim da pesquisa!")
        }else{
            console.log("Opção inválida!")
            console.log("Voto não computado! Tente novamente!")
        }
        var midades = idades/nota1
        var media = (nota2*100)/(nota1+nota2+nota3+nota4)
    }
    console.log("Média das idades das pessoas que responderam ótimo:",midades,"\nQuantidade de pessoas que respondeu regular:",nota3,"\nPercentual de pessoas que respondeu bom entre os entrevistados:",media)
}
main()