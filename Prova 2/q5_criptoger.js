// Criptografia de Roger: Receba uma frase(letra números e espaços apenas) e criptografia-a usando o algoritmo de roger:
// a. A frase deverá ser quebrada ao meio (truncada)
// b. Cada uma das partes deve ser invertida (como se fossem duas portas abrindo em 180 graus). (exemplo: "Guanabara" → "nauGaraba"
// c. Vogais viram números (a-1, ..., u-5)
// d. Números viram * (1-*, 2-**, ....9-*********, 0-#),
// e. Consoantes avançam 10 casas no Alfabeto de acordo com a tabela ASCII (no alfabeto Z vira A, z vira a, se fosse só um deslocamento)

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    
    var entrada = String(prompt("Informe a frase que deseja decodificar: ")).replace(/\d/gi, '*').replace(/a/gi, '1').replace(/e/gi, '2').replace(/i/gi, '3').replace(/o/gi, '4').replace(/u/gi, '5').replace(/b/gi, 'l').replace(/c/gi, 'm').replace(/d/gi, 'n').replace(/f/gi, 'p').replace(/g/gi, 'q').replace(/h/gi, 'r').replace(/j/gi, 's').replace(/k/gi, 't').replace(/l/gi, 'v').replace(/m/gi, 'w').replace(/n/gi, 'x').replace(/p/gi, 'y').replace(/q/gi, 'z').replace(/r/gi, 'b').replace(/s/gi, 'c').replace(/t/gi, 'd').replace(/v/gi, 'f').replace(/w/gi, 'g').replace(/x/gi, 'h').replace(/y/gi, 'j').replace(/z/gi, 'k') // Recebe a string que será criptografada e já substitui os caracteres pelos indicados 
    
    // Processamento
    var half = Math.floor(Number(entrada.length)/2) // Descobre onde é a metade exata da string
    var divisao = entrada.replace(entrada[half], '@') // Substitui o caractere central por "@" para que seja feita a divisão
    var parte = divisao.split('@') // Divide a array no meio
    var reverso1 = [parte[0]]
    var reverso2 = [parte[1]]

    console.log(reverso1+reverso2)
}
main();