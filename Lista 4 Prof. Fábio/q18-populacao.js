// Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes, crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão necessários, para que a população da cidade A ultrapasse a população da cidade B.

function main(){
    var pop_a = 200000
    var pop_b = 800000
    var anos = 0;
    while(pop_a < pop_b){
        pop_a = pop_a + (pop_a * 0.35)
        pop_b = pop_b + (pop_b * 0.135)
        anos++
    }
    console.log("Levará",anos,"anos para a população da cidade A superar a população da cidade B")
}
main();