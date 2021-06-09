// Questão 1 - COVID

const prompt = require("prompt-sync")();

function main(){

    // Entrada

    var media14 = Number(prompt("Qual a média dos 14 últimos dias?: "));
    var media1 = Number(prompt("Qual a média do último dia?: "));

    // Processamento

    var calc = (media14 * 15) /100
    var porcntg = ((media1-media14)/media14)*100

    // Saída

    if(media1 > calc + media14){
        console.log("A porcentagem de mudança é de:", porcntg.toFixed(0), "% e o número de casos está EM ALTA.");
    }
    else if(media1 >= media14){
        console.log("A porcentagem de mudança é de:", porcntg.toFixed(0), "% e o número de casos está ESTÁVEL")
    }
    else if(media1 < media14){
        console.log("A porcentagem de mudança é de:", porcntg.toFixed(0), "% e o número de casos está EM QUEDA.")
    }
}

main()