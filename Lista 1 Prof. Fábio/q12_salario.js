// Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

const prompt = require('prompt-sync')();

// Entrada

const salarioI = Number(prompt("Qual o seu salário atual?: "));

// Processamento

const salarioF = salarioI + (salarioI / 4);

// Saída

console.log('O seu salário com um acréscimo de 25% terá o valor de R$',salarioF,'reais.');