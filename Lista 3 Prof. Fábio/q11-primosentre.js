// Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.
var prompt = require('prompt-sync')();

function main(){
    var lim_inf = Number(prompt("Informe o limite inferior: "))
    var lim_sup = Number(prompt("Informe o limite superior: "))
    for (let i = lim_inf; i < lim_sup; i++) {
        if (i==1) {
            i++;
        }
        if (i==2 || i==3 || i==5 || i==7) {
            console.log(i);
        } else if((i%2!=0)&&(i%3!=0)&&(i%5!=0)&&(i%7!=0)){
            console.log(i);
        }
    }
}
main();