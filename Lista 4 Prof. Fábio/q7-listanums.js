// Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var num = Number(prompt("Informe um número: "))

    // Processamento
    var seg_num = Number(prompt("Informe outro número: "))
    while(num != seg_num){
        seg_num = Number(prompt("Informe outro número: "))
    }
    // Saída
    console.log("O último número digitado é igual ao primeiro!")
}
main();