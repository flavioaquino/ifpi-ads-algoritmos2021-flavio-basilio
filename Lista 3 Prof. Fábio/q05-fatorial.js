// Leia um número, calcule e escreva seu fatorial.

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var num = Number(prompt("Informe o número que será caculado o fatorial: "))

    // Processamento
    var resp = num
    var x = num
    for(let i=num;i!=0;i--){
        x--
        if(x!=0){
            resp = resp*x
        }
    }
    console.log("O fatorial de",num,"é:",resp)
}
main();