// Uma palavra é palíndroma se ela não se altera quando lida da direita para esquerda. Por exemplo, raiar é palíndroma. Escreva um programa que verifique se uma palavra digitada é palíndroma.

const prompt = require('prompt-sync')();

function main(){
    var frase = prompt('Informe a frase que deseja consultar: ').replace(/ /gi,'')
    var frase_inv = frase.split('').reverse().join('')
    if(frase == frase_inv){
        console.log('A frase é palíndroma!')
    }else{
        console.log('A frase NÃO é palíndroma!')
    }

}
main();