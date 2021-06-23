// Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e escreva os N termos da PG. Ler o valor de N.

const prompt = require('prompt-sync')();

function main(){
    var razao = Number(prompt("Escreva qual a razão da PG: "))
    var termo = Number(prompt("Escreva o primeiro termo da PG: "))
    var n = Number(prompt("Escreva qual o número de termos: "))
    var x = termo
    while(n != 0){
        x = x * razao
        n--
    }
    console.log(x)
}
main()