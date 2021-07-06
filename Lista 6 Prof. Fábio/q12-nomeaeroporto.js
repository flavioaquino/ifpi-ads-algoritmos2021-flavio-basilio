// As companhias de transportes aéreos costumam representar os nomes dos passageiros no formato último sobrenome/nome. Por exemplo, o passageiro Carlos Drummond de Andrade seria indicado por Andrade/Carlos. Escreva um programa que leia um nome completo e o escreva no formato acima.

const prompt = require('prompt-sync')();

function main(){
    var nome = String(prompt('Informe o seu nome: '))
    var divisao = nome.split(' ')
    var nome1 = divisao[0]
    var nome2 = divisao[divisao.length-1]
    console.log(nome2,"/",nome1)
}
main();
