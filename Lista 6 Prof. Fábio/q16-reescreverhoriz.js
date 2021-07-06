// Escreva uma sub-rotina de nome diagonal, que escreva um texto de até 20 caracteres na diagonal. Ex.:diagonal ('Algoritmos '); escreverá 'Algoritmos' na diagonal.

const prompt = require('prompt-sync')();

function main(){
    var entrada = prompt('Informe a posição e o texto no formato (10,Algoritmos): ')
    var split = entrada.split(',')
    var dado1 = Number(split[0])
    var dado2 = split[1]
    var espaco = String('')
    for(let i=0;i<dado1;i++){
        espaco = espaco +'-'
    }
    console.log(espaco,dado2)
}
main();