// Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.

const prompt = require('prompt-sync')();

function main(){
    
    // Entrada

    var num1 = Number(prompt("Informe qual o primeiro número: "))
    var num2 = Number(prompt("Informe qual o segundo número: "))
    
    mdc(num1,num2)
}

// Processamento & Saída

function mdc(n1, n2) {
    let i = 2;
    let xmdc = 1;
    while(n1/i != 1 && n2/i != 1) {
        if (n1%i == 0 && n2%i == 0) {
            xmdc *= i;
            n1 = n1/i;
            n2 = n2/i;
        } else {
            i++;
        }
    }
    console.log(xmdc);
}

main()