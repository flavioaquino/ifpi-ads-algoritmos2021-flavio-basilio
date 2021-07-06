// Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.

const prompt = require('prompt-sync')();

function main(){
    var frase = prompt("Insira a frase que deseja retirar os espaços: ");
    var resposta = frase.replace(/ /gi, '');
    console.log(resposta);
}
main();