// Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci (0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.

const prompt = require('prompt-sync')();

function main(){
    var N = Number(prompt("Informe o valor de N: "))

    let seqa = 0;
    let seqn = 1;
    let aux = 0;
    for (let i=0;i<(N-2);i++) {
        aux = seqa
        seqa = seqn;
        seqn = seqn + aux;
        if (i==0||i==1) {
            console.log(i);
        }

        console.log(seqn);
    }
}
main();