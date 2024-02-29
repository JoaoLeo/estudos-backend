/**
    1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a
    média aritmética das notas e a mensagem de aprovado para média superior ou
    igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
    a. Bônus: nenhuma nota pode passar de 10.
 */

let n1 = Number(prompt("digite a nota 1: "));
let n2 = Number(prompt("digite a nota 2: "));
let n3 = Number(prompt("digite a nota 3: "));
let n4 = Number(prompt("digite a nota 4: "));

const media = (n1 + n2 + n3 + n4) / 4;
if(n1 > 10 || n2 > 10  || n3 > 10  || n4 > 10  ){
    window.alert("Erro! Uma nota não pode passar de 10");
}
else  {
    let msg = media >= 7 ? "Aprovado" : "Reprovado"
    document.write("Média: ", media, "<br>");
    document.write(msg);
}
