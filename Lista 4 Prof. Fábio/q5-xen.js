// Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até chegar a 2.

const prompt = require('prompt-sync')();

// Entrada
function main(){

    var x = Number(prompt("Informe o valor do primeiro número(X): "))
    var n = Number(prompt("Informe o valor do segundo número(N): "))


    // Processamento
    function processo(){

        while(n >= 2){
            x = x /n
            n--
            console.log(x);
        }
    }
    processo();

}
main();



