//Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2 somas. (Flag: salário=0)

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var salario_antigo_total = 0
    var salario_novo_total = 0
    var salario = Number(prompt("Quantos salários serão ajustados?: "));
    while(salario != 0){
        console.log("## Próximo Salário ##")
        var salario_antigo = Number(prompt("Qual o seu salário antigo?: "));
        if(salario_antigo < 3000){
            var salario_novo = salario_antigo + (salario_antigo * 25)/100
        }else if(salario_antigo < 6000){
            var salario_novo = salario_antigo + (salario_antigo * 20)/100
        }else if(salario_antigo < 10000){
            var salario_novo = salario_antigo + (salario_antigo * 15)/100
        }else if(salario_antigo >= 10000){
            var salario_novo = salario_antigo + (salario_antigo * 10)/100
        }
        salario_antigo_total = salario_antigo_total + salario_antigo
        salario_novo_total = salario_novo_total + salario_novo
        diferenca_somas = salario_novo_total - salario_antigo_total
        console.log("O seu novo salário é de R$",salario_novo,"Reais.")
        salario--
    }
    console.log("A soma dos salários atuais é de R$",salario_antigo_total,"Reais.\nA soma dos salários novos é de R$",salario_novo_total,"Reais.\nA diferença entre os salários totais é de R$",diferenca_somas,"Reais.")
}
main();