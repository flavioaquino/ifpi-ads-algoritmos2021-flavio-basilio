// Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as consoantes deverão ser substituídas pelo caractere #.

const prompt = require('prompt-sync')();

function main(){
    var frase = String(prompt('Escreva o texto que deseja criptografar: '))
    var n_frase = frase.replace(/[bcdfghjklmnpqrstvwxyz]/gi,'#')
    console.log(n_frase.split('').reverse().join(''))
}
main();