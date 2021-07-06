// Leia uma data no formato DD/MM/AAAA e escreva o mês por extenso (DD de mês de AAAA).

const prompt = require('prompt-sync')();

function main(){
    var data = prompt('Informe a data no formato DD/MM/AAAA: ')
    var dia = data[0]+data[1]
    var ano = data[6]+data[7]+data[8]+data[9]
    
    if(data[3]=='0' && data[4]=='1'){
        var mes = 'Janeiro'
    }else if(data[3]=='0' && data[4]=='2'){
        var mes = 'Fevereiro'
    }else if(data[3]=='0' && data[4]=='3'){
        var mes = 'Março'
    }else if(data[3]=='0' && data[4]=='4'){
        var mes = 'Abril'
    }else if(data[3]=='0' && data[4]=='5'){
        var mes = 'Maio'
    }else if(data[3]=='0' && data[4]=='6'){
        var mes = 'Junho'
    }else if(data[3]=='0' && data[4]=='7'){
        var mes = 'Julho'
    }else if(data[3]=='0' && data[4]=='8'){
        var mes = 'Agosto'
    }else if(data[3]=='0' && data[4]=='9'){
        var mes = 'Setembro'
    }else if(data[3]=='1' && data[4]=='0'){
        var mes = 'Outubro'
    }else if(data[3]=='1' && data[4]=='1'){
        var mes = 'Novembro'
    }else if(data[3]=='1' && data[4]=='2'){
        var mes = 'Dezembro'
    }else{console.log('Data inválida')}

    console.log(dia,"de",mes,"de",ano)
}
main();