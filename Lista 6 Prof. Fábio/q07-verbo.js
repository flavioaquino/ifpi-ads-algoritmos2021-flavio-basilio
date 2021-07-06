// Leia um entrada regular terminado em ER e mostre sua conjugação no presente.

const prompt = require('prompt-sync')();

function main(){
    var entrada = prompt('Informe o entrada: ')
    var new_verbo = entrada.replace(/er/gi,'endo')
    console.log(new_verbo)
}
main()