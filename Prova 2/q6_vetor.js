// Receba N valores números positivos e negativos em vetor. Crie funções específicas em arquivo separado (modules) para as seguintes funcionalidades e as use na função main:

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var N = Number(prompt('Informe a quantidade de números negativos e postivos que serão fornecidos: ')) // Recebe o valor para N

    var maior_valor = 0 // Variável usada para encontrar e comparar valores maiores que as demais
    var menor_valor = 9999999999 // Variável usada para encontrar e comparar valores menores que as demais
    var positivos = 0 // Variável para contabilizar o número de elementos positivos
    var negativos = 0 // Variável para contabilizar o número de elementos negativos
    var numeros = [] // Vetor que armazena os números fornecidos
    var total = 0 // Variável que soma todos os valores fornecidos

    for(let i = 0;i<N;i++){ // Atribuindo valores para as variáveis a partir das informações do usuário
        console.log('Informe o número',i+1)
        var numero = Number(prompt(': ')) // Entrada de cada elemento fornecido pelo usuário

    // Processamento
        if(numero>maior_valor){ // Seleciona o maior e o menor número entre os fornecidos
            maior_valor = numero
        }else if(numero<menor_valor){
            menor_valor = numero
        }
        if(numero>0){ // Cataloga a quantidade de números positivos e negativos passados
            positivos++
        }else if(numero<0){
            negativos++
        }

        total = total + numero // Soma todos os números fornecidos
        numeros[i] = numero // Adiciona todos os números fornecidos em um Vetor
    }

    function duplicados(array) { // Função que encontra valores repetidos na array
        return String((new Set(array)).size !== array.length);
    }

    var media = total/N // Média dos números fornecidos

    // Saída
    console.log('A média dos números fornecidos é:',media,"\nO maior valor é:",maior_valor,"\nO menor valor é:",menor_valor,"\nQuantidade de positivos:",positivos,"\nQuantidade de negativos:",negativos) // Retorna os resultados requeridos pelo usuário com os dados fornecidos anteriormente pelo mesmo
    if(duplicados(numeros)=='true'){ // Condiciona resposta caso haja ou não valores repetidos
        console.log('Existem valores repetidos')
    }else{console.log('Não existem valores repetidos')}

}
main();