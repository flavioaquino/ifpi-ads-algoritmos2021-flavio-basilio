// Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00 por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída: Saldo do investimento após 1 ano: 1268.25 Deseja processar mais um ano (S/N) ?

var prompt = require('prompt-sync')();

function main(){
    var inv_mens = Number(prompt("Quanto será investido por mês?: "))
    var tax_jur = Number(prompt("Qual a taxa de Juros mensais?: "))
    var porctg = tax_jur/100
    var saldo = 0
    var mes = 0
    var ano = 1
    while(mes!=12){
        saldo = (saldo + inv_mens)+(saldo + inv_mens)*porctg
        mes++
    }
    console.log("Saldo do investimento após 1 ano:",saldo.toFixed(2))
    var resposta = String(prompt("Deseja processar mais um ano?(S/N): "))
    while(resposta=="S"){
        var mes2 = 0
        while(mes2!=12){
            saldo = (saldo + inv_mens)+(saldo + inv_mens)*porctg
            mes2++
        }
        ano++
        console.log("Saldo do investimento após",ano,"anos:",saldo.toFixed(2))
        var resposta = String(prompt("Deseja processar mais um ano?(S/N): "))
    }if(resposta=="N"){
        console.log("Fim!")
    }else{
        console.log("Dado inválido!")
    }
    console.log(saldo.toFixed(2))
    ano++
}
main();