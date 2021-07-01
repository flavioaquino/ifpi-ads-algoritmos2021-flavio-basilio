// Leia N e uma lista de N números e escreva o maior número da lista.

const prompt = require('prompt-sync')();

function main(){
    var num = 0
    var m_num = 0
    var N = Number(prompt("Informe o número de elementos(N): "))
    for(let i=1;i<N+1;i++){
        num = Number(prompt(`Informe o número ${i} da lista: `))
        if(num>m_num){
            m_num = num
        }
    }
    console.log("O maior número é:",m_num)
}
main();