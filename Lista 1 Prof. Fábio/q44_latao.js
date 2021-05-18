// Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada pelo usuário.

const prompt = require('prompt-sync')();

// Entrada

var lataokg = Number(prompt('Quantos Kg de latão você deseja obter?: '));

// Processamento

var cobre = (lataokg*70)/100;
var zinco = (lataokg*30)/100;

// Saída

console.log("Para se obter",lataokg,"Kg de latão, serão necessários",cobre.toFixed(2),"kg de cobre e",zinco.toFixed(2),"Kg de zinco.")