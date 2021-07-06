// Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva sua idade exata (em anos).

const prompt = require('prompt-sync')();

// Entrada
console.log("Qual a data atual?(Em números)")
var dia = Number(prompt("Dia: "))
var mes = Number(prompt("Mês: "))
var ano = Number(prompt("Ano: "))
console.log("Qual a sua data de nascimento?(Em números): ")
var dia_n = Number(prompt("Dia: "))
var mes_n = Number(prompt("Mês: "))
var ano_n = Number(prompt("Ano: "))

// Processamento

var idade_bruta = ano-ano_n
if(mes<mes_n){
    var idade = idade_bruta-1
}else if(mes==mes_n){
    if(dia<dia_n){
        var idade = idade_bruta-1
    }else{
        var idade = idade_bruta
    }
}else{
    var idade = idade_bruta
}

// Saída

console.log(idade)
