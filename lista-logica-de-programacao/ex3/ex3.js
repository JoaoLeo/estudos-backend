/**
    3. Escreva um script para ler o salário mensal atual de um funcionário e o
    percentual de reajuste. Calcular e escrever o valor do novo salário.
 */
let salario = Number(prompt("Escreva seu salario mensal: "));
let percentual = Number(prompt("Digite o percentual do seu aumento: "));
salario += salario * percentual / 100;
document.write("Seu novo salario é: ", salario);