// Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total de alunos da turma.

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var matricula = Number(prompt("Qual a sua matrícula?: "))
    var mediaf
    var aprovados = 0
    var reprovados = 0
    while(matricula != 0){
        console.log("### Matrícula",matricula,"###")
        nota1 = Number(prompt("Qual a sua nota 1?: "))
        nota2 = Number(prompt("Qual a sua nota 2?: "))
        nota3 = Number(prompt("Qual a sua nota 3?: "))
        mediaf = (2*nota1 + 3*nota3 + 5*nota3)/10
        if(mediaf >= 7){
            aprovados++
            console.log("O aluno de matrícula",matricula,"foi aprovado!")
        }else{
            reprovados++
            console.log("O aluno de matrícula",matricula,"foi reprovado.")
        }
        matricula--
    }
    console.log("Aprovados:",aprovados,"\nReprovados:",reprovados,"\nAlunos:",(aprovados+reprovados))
} 
main()