// Questão 2 - Varejo Nacional

const prompt = require("prompt-sync")();

function main(){

    // Entrada

    const nome = prompt("Qual o nome do Vendedor?: ");
    const vendas = Number(prompt("Qual o valor total de vendas no mês?: "));

    // Processamento

    var salario = Number(1100)

    
    if(vendas<5000){
        var comissao = 0
    }
    else if(vendas>5000){
        var comissao = ((vendas - 5000)*5)/100
    } 
    else if(vendas>10000){
        var comissao = (((vendas - 10000)*10)/100)+250
    }
    else if (vendas>30000){
        var comissao = vendas + ((vendas * 20)/100)
    }
    
    var salarioF = salario + comissao

    // Saída

    if(vendas <= 5000){
        console.log("O vendedor",nome,"não recebeu comissão e receberá R$",salarioF.toFixed(2),"Reais.")
    }
    else if(vendas < 10000){
        console.log("O vendedor",nome,"recebeu R$",comissao.toFixed(2),"Reais de comissão e receberá R$",salarioF.toFixed(2),"Reais.")
    }
    else if(vendas < 30000){
        console.log("O vendedor",nome,"recebeu R$",((((vendas - 10000)*10)/100)+250).toFixed(2),"Reais de comissão, R$ 250.00 na primeira faixa e R$",(((vendas - 10000)*10)/100).toFixed(2),"na segunda faixa, e receberá R$",salarioF.toFixed(2),"Reais.")
    }
    else if(vendas >= 30000){
        console.log("O vendedor",nome,"recebeu R$",comissao.toFixed(2),"Reais de comissão e receberá R$",salarioF.toFixed(2),"Reais.")
    }
}
main()