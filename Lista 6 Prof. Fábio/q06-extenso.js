// Leia uma frase e gere uma nova frase, substituindo o algarismo que aparecer na frase por seu extenso.

const prompt = require('prompt-sync')();

function main(){
    var frase = prompt('Informe a frase: ')
    let quebra = frase.split('')
    
    let algarismos = ['zero','um','dois','três','quatro','cinco','seis','sete','oito','nove']
    let mensagem = ''

    for(let i=0;i<= frase.length-1;i++){
        mensagem = mensagem + algarismos[quebra[i]] + ' '
    }
    
    console.log(mensagem)
}
main();