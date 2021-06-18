// Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária e na base hexadecimal.

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var num_dec = Number(prompt("Qual o número que será convertido?(Entre 0 e 255): "))
    // Processamento
    var num_bin = num_dec.toString(2)
    var num_hex = num_dec.toString(16)

    // Saída
    if(num_dec < 0 || num_dec > 255 ){
        console.log("O número inserido é inválido!")
    }else{
        console.log("O número",num_dec,"em decimal ficará: \n",num_bin,"em binário\n",num_hex,"em hexadecimal.")
    }
}
main()