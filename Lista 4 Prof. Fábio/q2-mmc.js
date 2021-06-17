// Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos.

const prompt = require('prompt-sync')();

function main(){
    
    // Entrada

    var num1 = Number(prompt("Informe qual o primeiro número: "))
    var num2 = Number(prompt("Informe qual o segundo número: "))

    // Processamento & Saída

    let resul = mmc(num1, num2);
    console.log("O MMC dos dois números é",(num1 * num2)/resul);

    function mmc(x, y) {
        let resto;
    
        while(resto != 0){
            resto = x%y;
            x = y;
            y = resto;
        }
        return x;
    }
}
main()