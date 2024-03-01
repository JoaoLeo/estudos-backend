/**
    7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final
    deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.
 */
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const pesoNota1 = 4;
const pesoNota2 = 6;
const mediaFinal = (nota1 * pesoNota1 + nota2 * pesoNota2) / (pesoNota1 + pesoNota2);
document.write("A media final é: ", mediaFinal)
