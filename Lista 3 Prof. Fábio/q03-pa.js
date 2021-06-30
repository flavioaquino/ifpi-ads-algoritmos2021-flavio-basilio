// Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão Aritmética que tem por valor inicial A0 e razão R.

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var A0 = Number(prompt("Informe o valor inicial da PA: "))
    var limite = Number(prompt("Informe o número máximo da PA: "))
    var R = Number(prompt("Informe a razão da PA: "))

    // Processamento
    var resp = 0
    for(i=A0; resp<limite; i++){
        resp = A0+(i-1)*R
        console.log(resp)
    }
}
main();