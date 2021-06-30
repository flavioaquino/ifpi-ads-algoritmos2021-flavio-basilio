// Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão Geométrica que tem por valor inicial A0 e razão R.

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var A0 = Number(prompt("Informe o valor inicial da PG: "))
    var limite = Number(prompt("Informe o número máximo da PG: "))
    var R = Number(prompt("Informe a razão da PG: "))

    // Processamento
    var resp = A0
    for(let i = 0;i<limite;i++){
        resp = resp*R
        if(resp<limite){
            console.log(resp)
        }
    }
}
main();