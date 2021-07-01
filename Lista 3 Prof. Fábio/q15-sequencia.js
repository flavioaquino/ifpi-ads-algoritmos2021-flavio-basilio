// Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).

const prompt = require('prompt-sync')();

function main(){
    var num = 0;
    var N = Number(prompt("Informe o número de elementos(N): "))
    console.log("Sequência:");
    for (let i=1;i<=N;i++) {
        num = num+i;
        console.log(num);
    }
}
main();