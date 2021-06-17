// Escreva um algoritmo para determinar o número de dígitos de um número informado.

const prompt = require('prompt-sync')();

function main(){
    // Entrada

    var num = String(prompt("Informe qual o número: "));

    // Processamento

    var tamanho = num.length

    // Saída

    console.log("O número possui",tamanho,"dígitos.")
}
main()