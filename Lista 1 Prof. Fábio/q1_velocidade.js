// Calculo de m/s para k/h

const prompt = require('prompt-sync')()

//Entrada

const Velocidade1 = Number(prompt("Qual a velocidade(m/s)?: "))

//Processamento

const Velocidade2 = Velocidade1 * 3.6;

//Saída

console.log('A velocidade em km/h é: ', Velocidade2,'Km/h')