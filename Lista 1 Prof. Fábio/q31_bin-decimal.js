// Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

const prompt = require('prompt-sync')();

//

var bin = prompt("Qual o número binário que você deseja transformar em decimal?: ")

//

var decimal = parseInt(bin, 2);

//

console.log("O número em binário",bin,"equaivale a",decimal,"em decimal.");