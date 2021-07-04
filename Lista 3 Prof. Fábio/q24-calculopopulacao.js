// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e escreva:
// a) média de salário da população;
// b) média de número de filhos;
// c) percentual de pessoas com salário de até R$ 1.000,00.

const prompt = require('prompt-sync')();

function main(){
    var N = Number(prompt("Informe o número de habitantes(N): "))
    var total_salario = 0
    var total_nfilhos = 0
    var salario_mil = 0
    for(let i=1;i!=N+1;i++){
        console.log('-- Habitante',i,'--')
        var salario = Number(prompt("Informe o salário: "))
        var filhos = Number(prompt("Informe o número de filhos: "))
        total_salario = total_salario+salario
        total_nfilhos = total_nfilhos+filhos 
        if(salario<=1000){
            salario_mil++
        }
    }
    var mediasalario = total_salario/N
    var mediafilhos = total_nfilhos/N
    var percentual = (salario_mil/N)*100
    console.log('Média de salário da população: R$',mediasalario.toFixed(2),"Reais.\nMédia de número de filhos:",mediafilhos,'filhos.\nPercentual de pessoas com salário de até R$ 1.000,00:',percentual,'%.')
}
main()