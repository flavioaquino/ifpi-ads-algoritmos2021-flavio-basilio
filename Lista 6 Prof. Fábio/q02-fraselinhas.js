// Leia uma frase e mostre cada palavra da frase em uma linha separada.

const prompt = require('prompt-sync')();

function main(){
    var frase = prompt("Insira a frase que deseja separar em linhas: ")
    var resposta = frase.split(' ');
    for(let i=0;i<resposta.length;i++){
        console.log(resposta[i])
    }
}
main();