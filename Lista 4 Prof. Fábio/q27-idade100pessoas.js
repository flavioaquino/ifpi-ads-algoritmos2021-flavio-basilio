// Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino, 2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:· Média de idade das mulheres; · Média de idade dos homens; · O percentual de homens solteiros; · O percentual de mulheres solteiras; · A quantidade de mulheres divorciadas acima de 30 anos.

const prompt = require('prompt-sync')();


function main(){
    var n_pessoas = 100
    var Masculino = 0
    var Feminino = 0
    var Casado = 0
    var Casada = 0
    var Solteiro = 0
    var Solteira = 0
    var Divorciado = 0
    var Divorciada = 0
    var divorciadas30 = 0
    var Viúvo = 0
    var Viúva = 0
    var IdadeH = 0
    var IdadeM = 0
    while(n_pessoas != 0){
        var gen = prompt("Qual o seu sexo?: ")
        var age = Number(prompt("Qual a sua idade?: "))
        var cs = prompt("Qual o seu estado civil?: ")
        if(gen==1){
            if(cs==2){
                Solteiro++
            }else if(cs==1){
                Casado++
            }else if(cs==3){
                Divorciado++
            }else if(cs==4){
                Viúvo++
            }else{console.log("Dado inválido!")}
            IdadeH = IdadeH + age
            Masculino++
        }else if(gen==2){
            if(cs==2){
                Solteira++
            }else if(cs==1){
                Casada++
            }else if(cs==3&&age>=30){
                divorciadas30++
            }else if(cs==4){
                Viúva++
            }else if(cs==3){
                Divorciada++
            }else{
                console.log("Dado inválido!")}
            IdadeM = IdadeM + age
            Feminino++
        }else{
            console.log("Dado inválido!")}
        n_pessoas--
    }
    var mediaM = IdadeM/Feminino
    var mediaH = IdadeH/Masculino
    var perc_homens_solteiros = (Solteiro*Masculino)/100
    var perc_mulheres_solteiras = (Solteira*Feminino)/100
    console.log("Média de idade das mulheres:",mediaM,"\nMédia de idade dos homens:",mediaH,"\nPercentual de homens solteiros:",perc_homens_solteiros,"%\nPercentual de mulheres solteiras:",perc_mulheres_solteiras,"\nQuantidade de mulheres divorciadas acima dos 30 anos:",divorciadas30)
}
main();