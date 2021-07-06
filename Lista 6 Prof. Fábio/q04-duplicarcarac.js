// Leia uma frase e gere uma nova frase, duplicando cada caractere da frase digitada.

const prompt = require('prompt-sync')();

function main(){
    var frase = String(prompt("Insira a frase que deseja duplicar os caracteres: "));
    var nova_frase = []
    for(let i=0;i<frase.length;i++){
        nova_frase[i] = frase[i]+frase[i]
    }
    console.log(nova_frase.toString().replace(/,/gi,''))
}
main();