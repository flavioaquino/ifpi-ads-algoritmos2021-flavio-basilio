// Leia N, calcule e escreva o valor de S.

const prompt = require('prompt-sync')();

function main(){
var N = Number(prompt("Informe o valor de N: "))
    var s = 0
    for (let i=1;N>=1;i++) {
        if (i%2==0) {
            s -= N/i;
            N--;
        } else {
            s += i/N;
            N--;
        }
    }
    console.log(s)
}
main();