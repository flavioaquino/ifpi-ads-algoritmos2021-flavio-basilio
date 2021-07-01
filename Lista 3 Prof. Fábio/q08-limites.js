// Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.

var prompt = require('prompt-sync')();

function main(){
    // Entrada
    var N = Number(prompt("Informe o valor que você deseja para N: "))
    var lim_inf = Number(prompt("Informe o limite inferior: "))
    var lim_sup = Number(prompt("Informe o limite superior: "))

    // Processamento
    var resp = 0
    for(let i=0;i<lim_sup;i++){
        resp = i * N
    // Saída
        if(resp>lim_inf && resp<lim_sup){
            console.log(resp)
        }
    }
}
main();