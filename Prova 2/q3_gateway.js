// Uma gateway de pagamento (empresa que permite você processar pagamentos em cartão de crédito) oferece a as seguintes condições:Implemente
// um software para que o usuário (suposto lojista) possa simular vendas, informando o valor da compra e em quantos dias gostaria de receber a 
// grana: pode informar qualquer quantidade de dias entre 2 e 31 dias. -->Apresente: Valor da Compra, Forma de pagamento (se parcelado quantas parcelas),
// Valor Taxa cobrado pelo Gateway, Valor Líquido a receber pelo logista e em quantos dias: 2, 14 ou 31.

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var valor_compra = Number(prompt("Por favor, informe o valor da compra efetuada: ")) // Recebe o valor inicial do produto
    var dias_recebimento = Number(prompt("Por favor, informe em quantos dias você deseja receber o saldo (Min-2; Máx-31): ")) // Recebe o número de dias que o usuário quer o saldo
    
    // Processamento
    var taxa_avista; // Variáveis para registrar resultados
    var taxa_aprazo; //
    var dias; //
    var taxa_final //

    if(dias_recebimento == 2){ // Consulta se a data de recebimento atende o primeiro requisito
        taxa_avista = ((valor_compra*4.39)/100)+0.4
        taxa_aprazo = ((valor_compra*4.99)/100)+0.4
        dias = 2
    }else if(dias_recebimento>2){ // Consulta se a data de recebimento atende o segundo requisito
        taxa_avista = ((valor_compra*3.49)/100)+0.4
        taxa_aprazo = ((valor_compra*3.99)/100)+0.4
        dias = 14
    }else if(dias_recebimento>14){ // Consulta se a data de recebimento atende o terceiro requisito
        taxa_avista = ((valor_compra*2.99)/100)+0.4
        taxa_aprazo = ((valor_compra*3.49)/100)+0.4
        dias = 31
    }else{console.log('A data fornecida é inválida!')} // Alerta o usuário sobre uma data fornecida não disponível

    var valor_liq_av = valor_compra - taxa_avista

    // Saída
    console.log("O Valor da compra efetuada foi de R$",valor_compra.toFixed(2),"Reais.") // Informa o usuário sobre o valor inicial da compra efetuada
    console.log("No caso de pagamento a vista, será cobrada uma taxa de R$",taxa_avista.toFixed(2),"Reais sobre o valor da compra, para que a mesma seja recebida em até",dias,"dias, retornando o valor de R$",valor_liq_av.toFixed(2),"Reais para o Lojista") // Informa o usuário a taxa aplicada sobre o número de dias escolhido para receber o dinheiro de volta e quanto será recebido pelo mesmo.
    console.log("No caso de pagamento parcelado, são possíveis as seguintes parcelas para o recebimento até o dia",dias,":") // Abre o leque de opções de parcelas para a data de recebimento escolhida
    for(let i = 1;i<13;i++){ // Calcula e exibe ao usuário as possibilidades de parcelas disponíveis
        taxa_final = taxa_aprazo + (i*taxa_aprazo)/100
        valor_liq_ap = valor_compra - taxa_final
        console.log("Taxas sobre",i,"x Vezes: R$",taxa_final.toFixed(2),"Reais\nValor a ser recebido pelo lojista: R$",valor_liq_ap.toFixed(2),"Reais.") // Exibe o valor da taxa sobre o número de vezes a ser parcelado e quanto é o valor retornado ao lojista referente a cada uma
    }
}
main();