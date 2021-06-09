// Questão 5 - SERASA

const prompt = require("prompt-sync")();

function main(){

    // Entrada

    var crit_a = Number(prompt("Qual o valor(0 a 100) do primeiro critério?: "))
    var crit_b = Number(prompt("Qual o valor(0 a 100) do segundo critério?: "))
    var crit_c = Number(prompt("Qual o valor(0 a 100) do terceiro critério?: "))

    // Processamento

    var serasa1a = crit_a *2.6
    var serasa1b = crit_b *5.7
    var serasa1c = crit_c *1.7

    var serasa2a = crit_a *6.2
    var serasa2b = crit_b *1.9
    var serasa2c = crit_c *1.9

    var soma1 = serasa1a + serasa1b + serasa1c 
    var soma2 = serasa2a + serasa2b + serasa2c 

    // Saída

    if(soma1<=400){
        console.log("O Score 1.0 é",soma1,"e a classificação é: Baixo")
    }
    else if(soma1<=600){
        console.log("O Score 1.0 é",soma1,"e a classificação é: Regular")
    }
    else if(soma1<=800){
        console.log("O Score 1.0 é",soma1,"e a classificação é: Bom")
    }
    else if(soma1<=1000){
        console.log("O Score 1.0 é",soma1,"e a classificação é: Muito Bom")
    }


    if(soma2<=300){
        console.log("O Score 2.0 é",soma1,"e a classificação é: Baixo")
    }
    else if(soma2<=500){
        console.log("O Score 2.0 é",soma1,"e a classificação é: Regular")
    }
    else if(soma2<=500){
        console.log("O Score 2.0 é",soma1,"e a classificação é: Bom")
    }
    else if(soma2<=500){
        console.log("O Score 2.0 é",soma1,"e a classificação é: Muito Bom")
    }
}

main()