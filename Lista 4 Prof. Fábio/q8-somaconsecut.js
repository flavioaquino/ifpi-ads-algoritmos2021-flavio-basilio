// Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo quando a soma de dois números consecutivos da lista for igual a X.

const prompt = require("prompt-sync")();

function main(){
    // Entrada
    var numx = Number(prompt("Informe qual o número(X): "))
    var num1 = Number(prompt("Informe um número: "))
    var num2 = Number(prompt("Informe um número: "))

    // Processamento
    var soma_nums = num1 + num2
    while(soma_nums != numx){
        num1 = Number(prompt("Informe um número: "))
        num2 = Number(prompt("Informe um número: "))
        soma_nums = num1 + num2
    }
    console.log("A soma dos dois últimos números é igual ao primeiro número informado!")
}
main()