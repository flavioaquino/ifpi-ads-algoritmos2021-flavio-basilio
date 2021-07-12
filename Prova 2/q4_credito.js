// A Blue Tech Bank disponibilizou opções de crédito de R$ 40 mil,60 mil, e 81 mil reais para empreendedores locais. Mensalmente adiciona juros
// de 1% sobre o saldo devedor de um empréstimo. As opções de parcelas mensais são fixas no valor de R$ 1.000, R$ 1.200 ou R$ 1.500. Escreva um algoritmo que
// calcule quantos meses são necessários para se concluir o pagamento do empréstimo e qual o valor da parcela final. A Cada mês no saldo devedor entram
// os Juros sobre o saldo atual e Sai a Parcela fixa. Faça um programa que receba o valor do empréstimo escolhido, o valor de parcela
// ( entre as opções acima). e apresente o extrato mês a mês da atualizaçãodo saldo devedor (Juros do Mês, Parcela do Mês fixa, Saldo Anterior, Novo
// Saldo(após Juros e Pag. parcela) da primeira até a última parcela. Apresente cada mês até o saldo chegar a valor 0. A última parcela pode ser inferior à parcela
// contratada (Ou seja, saldo devedor negativo ficará subtraído o valor da parcela). Apresente quanto meses serão necessários para quitar o saldo devedor.

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var emprestimo = Number(prompt('Informe a quantidade de crédito solicitada (R$ 40.000, 60.000 ou 81.000):')) // Recebe o crédito solicitado pelo usuário
    var parcelas = Number(prompt('Informe a opção de parcela mensal desejada (R$ 1.000, 1.200 ou 1.500):')) // Recebe o valor da parcela descontado sobre o saldo devedor todo mês

    if(emprestimo!=40000 && emprestimo!=60000 && emprestimo!=81000){
        console.log("A quantidade de crédito selecionada não é disponível!")
    }else if(parcelas!=1000 && parcelas!=1200 && parcelas!=1500){
        console.log("A opção de parcela selecional não é disponível!")
    }else{

    // Processamento

        var saldo_devedor = emprestimo; // Variável para o cálculo do saldo devedor do usuário
        var parcelas_restantes = 0; // Variável para identificar o número de parcelas restantes

        while(saldo_devedor>parcelas){ // Cálculo do número de parcelas restantes e da parcela final
            saldo_devedor = saldo_devedor - parcelas
            parcelas_restantes++
        }

        var ultima_parcela = saldo_devedor // Transforma o resultado do saldo devedor inferior ao valor da parcela no valor da última parcela

        console.log('O número de parcelas restantes para a quitação do crédito é de',parcelas_restantes+1,'e a última parcela terá o valor de: R$',ultima_parcela.toFixed(2),'Reais.') // Retorna ao usuário o número de parcelas restantes até a quitação da dívida e o valor da última parcela
    }
}
main();