// Questão 3 - Média Ponderada IFPI

const prompt = require("prompt-sync")();

function main(){
    // Entrada

    var nome = prompt("Qual o nome do aluno?: ")
    var nota1 = Number(prompt("Qual a nota do aluno na primeira avaliação?: "))
    var nota2 = Number(prompt("Qual a nota do aluno na segunda avaliação?: "))
    var atvs = Number(prompt("Qual a nota do aluno pelas atividades?: "))

    // Processamento

    var av1 = nota1 * 2
    var av2 = nota2 * 3
    var media_s = (av1 + av2 + atvs)/6
    
    if(media_s<4){
        console.log("O aluno",nome,"foi diretamente REPROVADO.")
    }
    else if(media_s<7){
        var provafinal = Number(prompt("Qual a nota que você obteve na Prova Final?: "))
    }
    
    var notafinal = (provafinal + media_s)/2

    // Saída

    if(media_s>=7 ){
        console.log("O aluno",nome,"ficou com a média",media_s.toFixed(2),"e foi APROVADO.")
    }
    else if(notafinal>=7){
        console.log("O aluno",nome,"ficou com a média final",notafinal.toFixed(2),"e foi APROVADO PÓS-PF.")
    }
    else if(notafinal<7){
        console.log("O aluno",nome,"ficou com a média final",notafinal.toFixed(2),"e foi REPROVADO PÓS-PF.")
    }
    

}
main()