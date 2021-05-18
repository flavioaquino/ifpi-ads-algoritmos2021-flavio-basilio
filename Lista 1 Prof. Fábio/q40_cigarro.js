// Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

const prompt = require('prompt-sync')();

// Entrada

var Nanos = Number(prompt("Quantos anos ele fuma?: "));
var Ncigarros = Number(prompt("Quantos cigarros ele fuma por dia?: "));
var Preço = Number(prompt("Qual o preço da carteira de cigarros?: "));

// Processamento

var diasemano = (Nanos*365);
var valor = (Preço/20);
var valorpdia = (valor * Ncigarros);
var resposta = (valorpdia * diasemano)

// Saída

console.log("O fumante gastou cerca de R$",resposta.toFixed(2),"reais em cigarro até o momento.");