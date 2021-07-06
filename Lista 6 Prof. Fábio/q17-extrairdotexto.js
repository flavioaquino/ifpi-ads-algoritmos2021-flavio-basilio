// Escreva uma sub-rotina de nome substr, que extraia uma sub-cadeia de uma string. Ex.: substr(texto, 10, 20), extrairá 20 caracteres de texto a partir do caractere na posição 10.

const prompt = require('prompt-sync')();

function main(){

    var entrada = prompt('Informe o texto, a posição e o número de caracteres a se extrair no formato: (texto,10,20): ')
    var split = entrada.split(',')
    var dado1 = String(split[0])
    var dado2 = Number(split[1])
    var dado3 = Number(split[2])
    var resposta = ''
    for(let i=dado2;i<dado3+dado2;i++){
        resposta = resposta+dado1[i]
    }
    console.log(resposta)

}
main();