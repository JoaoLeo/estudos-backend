const express = require("express");
const router = express.Router();

router.post("/ex1", (req,res)=>{
    let {salario} = req.body;
    const salarioReajustado = salario <= 2000 ? salario *= 1.5 : salario *= 1.3;
    res.json({salarioReajustado});
})


router.post("/ex2", (req,res)=>{
    let {n1,n2,n3} = req.body;
    let maior = n1;
    if (n2 > maior)  maior = n2;
    if (n3 > maior)  maior = n3;
    res.json({maior});
})

router.post("/ex3", (req,res)=>{
    let {numChopps ,numCoberturas , numPessoas } = req.body;
    const precoPizzaTotal = 17.00 + (numCoberturas * 1.50);
    const precoTotal = (numChopps * 4.80) + precoPizzaTotal;
    const taxaGarcomTotal = precoTotal * 0.10;
    const totalComTaxa = precoTotal + taxaGarcomTotal;
    const valorPorPessoa = totalComTaxa / numPessoas;
    res.json({valorPorPessoa});
})


router.post("/ex4", (req,res)=>{
    const {salarioMinimo,horasTrabalhadas,depedentes,horasExtras} = req.body;
    const valorHoraTrabalhada = salarioMinimo * 0.2;
    const salarioDoMes = horasTrabalhadas  * valorHoraTrabalhada;
    const valorDepedente = depedentes * 32;
    const valorHoraExtra = (valorHoraTrabalhada * 1.5) * horasExtras;
    const salarioBruto = salarioDoMes + valorDepedente + valorHoraExtra;
    let imposto = 0;

    if(salarioBruto > 2000)
        imposto = salarioBruto >= 5000 ? salarioBruto * 0.2 : salarioBruto * 0.1;

    const salarioLiquido = salarioBruto - imposto;

    const gratificacao = salarioLiquido < 3500 ? 1000 : 500;
    const salarioReceber  =  salarioLiquido + gratificacao;
    res.json({salarioReceber});
})

router.post("/ex5", (req,res)=>{
    const {idAluno , n1, n2,n3, mediaExercicios } = req.body;
    const mediaAproveitamento = (n1 + n2 * 2 + n3 * 3 + mediaExercicios) / 7;
    let conceito = "";
    if (mediaAproveitamento >= 9) conceito =  "A";
    else if (mediaAproveitamento >= 7.5) conceito =  "B";
    else if (mediaAproveitamento >= 6.0) conceito =  "C";
    else if (mediaAproveitamento >= 4.0) conceito =  "D";
    else conceito = "E";
    let msg = (conceito === "A" || conceito === "B" || conceito === "C") ? "APROVADO" : "REPROVADO";
    res.json({idAluno,notas:[n1,n2,n2], mediaExercicios, mediaAproveitamento, conceito, msg});
})

router.post("/ex6", (req,res)=>{
    const {altura ,sexo} = req.body;
    let pesoIdeal = sexo.toLowerCase() === 'masculino' || sexo.toLowerCase() === 'm' ? (72.7 * altura) - 58 : (62.1 * altura) - 44.7;
    res.json({pesoIdeal});
})

router.post("/ex7", (req,res)=>{
    const {n1,n2,n3} = req.body;
    let menor = Math.min(n1, n2, n3);
    const soma =  n1 + n2 + n3 - menor;
    res.json({soma});
})

router.post("/ex8", (req,res)=>{
    const {salario, codigo} = req.body;
    let percentualAumento;
    switch (codigo) {
        case 101:
            percentualAumento = 0.05;
            break;
        case 102:
            percentualAumento = 0.075;
            break;
        case 103:
            percentualAumento = 0.10;
            break;
        default:
            percentualAumento = 0.15; 
            break;
    }
    const novoSalario = salario * (1 + percentualAumento);
    const diferencaSalario = novoSalario - salario;
    res.json({salario,novoSalario,diferencaSalario});
})
module.exports = router;