// Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$ 40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR. Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário líquido do funcionário.

const prompt = require('prompt-sync')();

function main(){
    var N = Number(prompt("Informe o número de funcionários(N): "))
    for(let i=1;i!=N+1;i++){
        console.log('-- Funcionário',i,'--')
        var codigo = prompt("Informe o código do funcionário: ")
        var horas = Number(prompt("Informe o número de horas trabalhadas do funcionário: "))
        var dependentes = Number(prompt("Informe o número de dependentes do funcionário: "))
        var sal_hora = horas*12
        var sal_depen = dependentes*40
        var inss = (sal_hora+sal_depen)*0.085
        var ir = (sal_hora+sal_depen)*0.05
        var total = (sal_hora+sal_depen)-(inss+ir)
        console.log('----------------------------------------------------')
        console.log("O salário do funcionário de código",codigo,"será de R$",total.toFixed(2),"Reais com o reajuste dos Impostos:\nINSS: R$",inss.toFixed(2),'Reais\nIR: R$',ir.toFixed(2),'Reais.')
    }
}
main();
