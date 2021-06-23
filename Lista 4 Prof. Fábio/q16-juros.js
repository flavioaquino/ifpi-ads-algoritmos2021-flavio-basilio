// Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo. Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.

function main(){
    var debito = 3000
    var dias = 0;
    while(debito > 0){
        var juros = (debito * 0.85) / 100;
        debito = debito-200+juros;
        dias++;
    }
    console.log("Faltam",dias,"dias para o pagamento ser quitado.")
}
main();