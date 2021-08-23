declare const require: any;

const prompt = require('prompt-sync')();

var valor1 = Number(prompt("Informe o primeiro valor: "))
var valor2 = Number(prompt("Informe o segundo valor: "))
var valor3 = Number(prompt("Informe o terceiro valor: "))

if (valor1<valor2 && valor1<valor3){
    console.log("O menor valor é",valor1,"referente ao valor 1.")
}else if (valor2<valor1 && valor2<valor3){
    console.log("O menor valor é",valor2,"referente ao valor 2.")
}else if (valor3<valor2 && valor3<valor1){
    console.log("O menor valor é",valor3,"referente ao valor 3.")
}