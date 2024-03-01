/**
    6. Uma revendedora de carros usados paga a seus funcionários vendedores um
    salário fixo por mês, mais uma comissão também fixa para cada carro vendido e
    mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o
    número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e
    o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
    vendedor.
 */
const numeroCarrosVendidos = parseInt(prompt("Digite o numero de carros vendidos pelo vendedor:"));
const valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas realizadas pelo vendedor:"));
const salarioFixo = parseFloat(prompt("Digite o salario fixo do vendedor:"));
const valorPorCarro = parseFloat(prompt("Digite o valor que o vendedor recebe por carro vendido:"));
const comissaoFixaPorCarro = numeroCarrosVendidos * valorPorCarro;
const comissaoPorVendas = valorTotalVendas * 0.05;
const salarioFinal = salarioFixo + comissaoFixaPorCarro + comissaoPorVendas;
document.write("O salario final é: ", salarioFinal)