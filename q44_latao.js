// Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada pelo usuário.

const prompt = require('prompt-sync')();

// Entrada

var lataokg = Number(prompt('Quantos Kg de latão você deseja obter?: '));

// Processamento
if(lataokg >= 10){
    var cobre = ((lataokg*70)/100);
    var zinco = ((lataokg*30)/100);
}
else if(lataokg<10){
    var cobre = ((lataokg*70)/100)*1000;
    var zinco = ((lataokg*30)/100)*1000;
}
// Saída

if(lataokg<10){
    console.log("Para se obter",lataokg,"Kg de latão, serão necessários",cobre,"gramas de cobre e",zinco,"gramas de zinco.");
}
else if(lataokg >= 10){
    console.log("Para se obter",lataokg,"Kg de latão, serão necessários",cobre,"quilogramas de cobre e",zinco,"quilogramas de zinco.");
}