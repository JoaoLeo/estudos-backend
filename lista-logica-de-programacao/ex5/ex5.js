/**
   5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a
    porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
    Escreva um script para ler o custo de fábrica de um carro, a porcentagem do
    distribuidor e o imposto, e calcular e escrever o custo final ao consumidor
 */
const custoFabrica = parseFloat(prompt("Digite o custo de fabrica do carro:"));
const percentualDistribuidor = parseFloat(prompt("Digite o percentual do distribuidor:"));
const impostos = parseFloat(prompt("Digite o valor dos impostos:"));
const custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
const custoTotal = custoFabrica + custoDistribuidor + impostos;
document.write("O custo total do carro é: ",custoTotal);