// Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus divisores. (flag número = 0).

const prompt = require('prompt-sync')();

function main(){
    
    // Entrada

    var num = prompt("Escreva o número: ");
    var i = 0

    // Processamento & Saída

    if(num > 0){
        while(num >= i){
            if(num%i == 0){
                console.log(i)
            }
        i++;
        }
    }
   

}

main()