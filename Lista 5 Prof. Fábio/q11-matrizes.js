// Leia uma matriz quadrada de ordem N, calcule e escreva sua matriz transposta..

const prompt = require('prompt-sync')();

function main(){
    var coluna = []
    var N = Number(prompt('Informe a ordem da matriz: '))
    for(let n = 0;n<N;n++){
        for(let i = 0;i<N;i++){
            coluna[i] = String(prompt('Informe o elemento',i,'da coluna.'))
        }
    }
}
main();