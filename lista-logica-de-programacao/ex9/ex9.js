/**
    9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro
    número.
 */

const numero1 = parseFloat(prompt("Digite o primeiro numero:"));
const numero2 = parseFloat(prompt("Digite o segundo numero:"));
const soma = numero1 + numero2;
const resultado = soma * numero1;
document.write("O resultado é:", resultado);