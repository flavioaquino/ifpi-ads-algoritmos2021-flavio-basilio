// Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo, clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério: Ao final, o algoritmo deve escreva os totais de pontos de cada clube, indicando o clube vencedor.

const prompt = require('prompt-sync')();

function main() {
    // Entrada
    var numero_prova = 1;
    var quantidade_nadadores = 1;
    var somaa = 0;
    var somab = 0;
    var i = 1;
    var j = 1;
    while(numero_prova > 0) {

        numero_prova = Number(prompt("Informe o número da prova: "));
        quantidade_nadadores = Number(prompt("Informe a quantidade de nadadores: "));

        while(i <= numero_prova) {

            console.log(`Prova: ${numero_prova}`);

            while(j <= quantidade_nadadores) {

                var nome = Number(prompt("Informe o nome do nadador: "));
                var lugar = Number(prompt("Informe a classificação do nadador: "));
                var tempo = Number(prompt("informe o tempo do nadador: "));
                var clube = String(prompt("Informe o clube do nadador: "));

    // Processamento
                if (lugar == 1) {
                    if (clube == "a") {
                        somaa = somaa + 9;
                    } else {
                        somab = somab + 9;
                    }
                } else if(lugar == 2) {
                    if (clube == "a") {
                        somaa = somaa + 6;
                    } else {
                        somab = somab + 6;
                    }
                } else if(lugar == 3) {
                    if (clube == "a") {
                        somaa = somaa + 4;
                    } else {
                        somab = somab + 4;
                    }
                } else if(lugar == 4) {
                    if (clube == "a") {
                        somaa = somaa + 3;
                    } else {
                        somab = somab + 3;
                    }
                } else {
                    if (clube == "a") {
                        somaa = somaa + 0;
                    } else {
                        somab = somab + 0;
                    }
                }
                j++;
                
            }
            i++;
        }
    }
    // Saída
    console.log("Total de pontos clube A: ",somaa,"\nTotal de pontos clube B: ",somab);
}

main();