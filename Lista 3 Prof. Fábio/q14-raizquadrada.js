// Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o maior quadrado menor que 38 é 36 (quadrado de 6).

const prompt = require('prompt-sync')();

function main(){
    var raiz = 0
    var m_num = 0
    // Entrada
    var N = Number(prompt("Informe o número N: "))

    // Processamento
    for(let i=N;i>1;i--){
        raiz = Math.sqrt(i)
        resul = String(Number.isInteger(raiz))
        if(resul=='true'){
            if(i>m_num){
            m_num = i
            }
        }
    }
    // Saída
    console.log(m_num)
}
main();