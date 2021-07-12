// (q2_horario.js) Leia um horário no formato hh:mm:ss e escreva o resultado na seguinte forma: “hh hora(s), mm minuto(s) e ss segundo(s)

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var entrada = prompt('Informe o horário(formato hh:mm:ss): ') // Recebe o horário no formato inicial

    // Processamento
    var hora = entrada[0]+entrada[1] // Transforma os dois primeiros elementos da string em uma variável a parte (horas)
    var minuto = entrada[3]+entrada[4] // Transforma os dois elementos centrais da string em uma variável a parte (minutos)
    var segundo = entrada[6]+entrada[7] // Transforma os dois últimos elementos da string em uma variável a parte (segundos)

    // Saída
    console.log(hora,'hora(s),',minuto,'minuto(s) e',segundo,'segundo(s).') // Devolve os dados anteriormente fornecidos pelo User na forma requisitada pelo mesmo
}
main()