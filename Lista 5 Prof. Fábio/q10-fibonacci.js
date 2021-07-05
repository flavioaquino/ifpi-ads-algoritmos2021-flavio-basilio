// Escreva os N primeiros termos da seqüência de Fibonacci (0,1,1,2,3,5,8,13,21,...).

const prompt = require('prompt-sync')();

function main(){
    var penultimo=0, ultimo=1;
    var final;
    var N = Number(prompt('Informe quantos elementos você deseja mostrar: '))
    for(let i = 0;i<N;i++){
        final = ultimo + penultimo
        penultimo = ultimo
        ultimo = final
        console.log(final)
    }
}
main();