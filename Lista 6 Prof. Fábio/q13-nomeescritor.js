// As normas para a exibição da bibliografia de um artigo cientifico, de uma monografia, de um livro, texto etc., exigem que o nome do autor seja escrito no formato último 
// sobrenome, sequência das primeiras letras do nome e dos demais sobrenomes, seguidas de ponto final. Por exemplo, Antonio Carlos Jobim seria referido por Jobim, A. C.. 
// Escreva um programa que receba um nome completo e o escreva no formato de bibliografia.

const prompt = require('prompt-sync')();

function main(){
    var nome = String(prompt('Informe o seu nome: '))
    var divisao = nome.split(' ')
    var nome1 = divisao[0]
    var nome2 = divisao[divisao.length-1]
    var sigla = ''
    for(let i=1;i<divisao.length-2;i++)
        sigla = sigla + (divisao[i])[0] + '. '
    console.log(nome2,",",nome1,sigla)
}
main();