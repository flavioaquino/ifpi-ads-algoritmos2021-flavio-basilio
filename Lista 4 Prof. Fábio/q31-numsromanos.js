//Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).

const prompt = require('prompt-sync')();

function main(){
    var num = Number(prompt("Qual número você deseja transformar em romano?(Máximo 3 dígitos): "))

    var unidades = num%10;
    var dezenas = ((num-num%10)%100)/10;
    var centenas = centenas = (num-num%100)/100;

    var i = 0
    var r = ""

    var unidades_res = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
    var dezenas_res = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
    var centenas_res = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']

    while(i<=unidades) {
        if (i==unidades) {
            r = unidades_res[i] + r;
        }
        i++;
    }
    i = 0;

    while(i<=dezenas) {
        if (i==dezenas) {
            r = dezenas_res[i] + r;
        }
        i++;
    }
    i = 0;

    while(i<=centenas) {
        if (i==centenas) {
            r = centenas_res[i] + r;
        }
        i++;
    }

    console.log("Seu número em Romano é:",r);
}

main();