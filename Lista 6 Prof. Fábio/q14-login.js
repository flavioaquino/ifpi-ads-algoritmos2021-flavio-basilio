// Escreva uma sub-rotina que gere logins para usuários de um sistema de computação baseado na seguinte regra: o login é composto pelas letras iniciais do nome do usuário.

const prompt = require('prompt-sync')();

function main(){
    var nome = String(prompt('Informe o seu nome: '))
    var divisao = nome.split(' ')
    var login = ''
    for(let i=0;i<divisao.length;i++)
        login = login + (divisao[i])[0]
    console.log('Login:',login)
}
main();