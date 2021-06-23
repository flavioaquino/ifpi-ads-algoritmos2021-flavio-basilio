// Leia 2 números inteiros e escreva o quociente e o resto da divisão dos mesmos, sem que os operadores de divisão (/ e %) sejam utilizados.

const prompt = require('prompt-sync')();

function main(){
    var A = Number(prompt("Qual o valor do primeiro número?: "))
    var B = Number(prompt("Qual o valor do segundo número?: "))
    var x = B
    var y = A
    var q = 0
    var resto
    while(y != 0){
        if(y >= B) {
            y = y - B
            resto = y
            q++
        }else{
            y = y - y
        }
    }
    console.log("O quociente é:",q,"E o resto é:",resto)
}
main()