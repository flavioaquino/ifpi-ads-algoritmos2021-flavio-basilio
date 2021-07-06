// Um dos recursos disponibilizados pelos editores de texto mais modernos é a contagem da quantidade de palavras de um texto. Escreva um programa que determine o numero de palavras de um texto digitado.

const prompt = require('prompt-sync')();

function main(){
    var frase = String(prompt('Informe a frase: '))
    var divisao = (frase.split(' ')).length
    console.log('A frase possui',divisao,'palavras')
}
main();
