// Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave pode levantar vôo ou não.

const prompt = require("prompt-sync")();

function main(){
    // Entrada
    var num_contain = Number(prompt("Qual o número de containers?: "))
    var peso_contain_total = 0
    while(num_contain != 0){
        console.log("## Container",num_contain,"##")
        var peso_contain = Number(prompt("Qual o peso do container(Kg)?: "))
        peso_contain_total = peso_contain_total + peso_contain
        num_contain --
    }
    var num_passageiros = Number(prompt("Qual o número de passageiros?: "))
    var num_passageiros2 = num_passageiros
    var num_bagag_total = 0
    while(num_passageiros != 0){
        console.log("## Passageiro",num_passageiros,"##")
        var num_bagag = Number(prompt("Qual o número de bagagens?: "))
        num_bagag_total = num_bagag_total + num_bagag
        num_passageiros --
    }
    var peso_passag_total = num_passageiros2*70
    var peso_bagag_total = num_bagag_total*10
    var combustivel_possivel = 500000 - (peso_bagag_total + peso_passag_total + peso_contain_total)
    var combustivel_total = combustivel_possivel * 1.5
    console.log("Quantidade de passageiros:",num_passageiros2,"\nVolume de bagagens:",peso_bagag_total,"Kg.\nPeso total dos passageiros:",peso_passag_total,"Kg.\nPeso da carga:",peso_contain_total,"Kg.\nÉ possível armazenar",combustivel_total,"L de combustível.")
    if(combustivel_total >= 10000){
        console.log("A viagem foi liberada!")
    }else{
        console.log("A viagem não foi liberada por falta de combustível.")
    }
}
main();