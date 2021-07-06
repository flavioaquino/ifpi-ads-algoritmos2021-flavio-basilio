// Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.

const prompt = require('prompt-sync')();

// Entrada
console.log("Qual a data atual?(Em números)")
var dia = Number(prompt("Dia: "))
var mes = Number(prompt("Mês: "))
var ano = Number(prompt("Ano: "))

// Processamento & Saída

if(mes>12){
    console.log('A data é inválida!')
}else if(mes<=12){
    if(mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12){
        if(dia>31){
            console.log('A data é inválida!')
        }else{console.log('A data é válida!')}
    }else if(mes==2){
        if(dia>28){
            console.log('A data é inválida!')
        }else{console.log('A data é válida!')}
    }else if(mes==4 || mes==6 || mes==9 || mes==11){
        if(dia>30){
            console.log('A data é inválida!')
        }else{console.log('A data é válida!')}
    }
}