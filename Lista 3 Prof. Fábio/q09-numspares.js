// Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.

var prompt = require('prompt-sync')();

function main(){
    var lim_inf = Number(prompt("Informe o limite inferior: "))
    var lim_sup = Number(prompt("Informe o limite superior: "))

    for(let i=1;i<lim_sup;i++){
        resp = i*2
        if(resp>lim_inf && resp<lim_sup){
            console.log(resp)
        }
    }
}
main();