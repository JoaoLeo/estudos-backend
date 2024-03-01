/**
    4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a
    porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
    Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%,
    escrever um script para ler o custo de fábrica de um carro, calcular e escrever o
    custo final ao consumidor.
 */
const percDistrubuidor = 28;
const impostos = 45;
let custoFabrica = Number(prompt("Qual o custo"))
let custoF2 = custoFabrica + (custoFabrica * percDistrubuidor) / 100;
let custoF3 = custoFabrica + (custoFabrica * impostos) / 100;
let custoFinal = custoFabrica + custoF2 + custoF3;
document.writeln("O custo final é: ", custoFinal)