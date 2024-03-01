/**
    8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo
    que o raio e a altura devem ser fornecidos.
    OBS: V = PI * Raio^2 * Altura
 */
const raio = parseFloat(prompt("Digite o raio da caixa de agua:"));
const altura = parseFloat(prompt("Digite a altura da caixa de agua:"));
const pi = Math.PI;
const volume = pi * Math.pow(raio, 2) * altura;
document.write("O volume é: ", volume)