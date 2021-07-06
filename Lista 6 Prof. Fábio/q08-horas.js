// Leia uma string no formato hh:mm:ss e escreva o resultado na seguinte forma: “hh hora(s), mm minuto(s) e ss segundo(s)”.

const prompt = require('prompt-sync')();

function main(){
    var entrada = prompt('Informe o horário(formato hh:mm:ss): ')
    var hora = entrada[0]+entrada[1]
    var minuto = entrada[3]+entrada[4]
    var segundo = entrada[6]+entrada[7]
    console.log(hora,'hora(s),',minuto,'minuto(s) e',segundo,'segundo(s).')
}
main()