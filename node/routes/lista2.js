const express = require("express");
const router = express.Router();


router.post("/ex1", (req,res)=>{
    const {qtdMinima, qtdMaxima} = req.body;
    let estoqueMedio = (qtdMinima+qtdMaxima) / 2 ;
    res.json({estoqueMedio});
})

router.post("/ex2", (req,res)=>{
    const {nome, numHoras,valorPorHora,numFilho} = req.body;
    let salarioBruto = valorPorHora * numHoras;
    let salario = ((3 * numFilho / 100) + salarioBruto);
    res.json({salario});
})
router.post("/ex3", (req,res)=>{
    const {anos,meses,dias} = req.body;
    const diasAno = 365;
    const diasMes = 30;
    const diasTotal = anos * diasAno + meses * diasMes + dias;
    res.json({diasTotal});
})

router.post("/ex4", (req,res)=>{
    const {dias} = req.body;
    const diasAno = 365;
    const diasMes = 30;
    const anos = Math.floor(dias / diasAno);
    const meses = Math.floor((dias % diasAno) / diasMes);
    const diasRestantes = dias % diasMes;
    res.json({anos,meses,diasRestantes});
})

router.post("/ex5", (req,res)=>{
    const {n1,n2,n3} = req.body;
    const pesoN1 = 2;
    const pesoN2 = 3;
    const pesoN3 = 5;
    const somaPesos = pesoN1 + pesoN2 + pesoN3;
    const media = (n1 * pesoN1 + n2 * pesoN2 + n3 * pesoN3) / somaPesos;
    res.json({media});
})


router.post("/ex6", (req,res)=>{
    const {segundos} = req.body;
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRes = segundos % 60;
    res.json({horas,minutos,segundosRes});
})

router.post("/ex7", (req,res)=>{
    const {nome, salarioFixo, totalVendas, percComissao} = req.body;
    const comissao = totalVendas * (percComissao / 100);
    const salarioTotal = salarioFixo + comissao;
    res.json({nome,salarioTotal});
})


router.post("/ex8", (req,res)=>{
    const {nome,distancia, tempo} = req.body;
    const velocidadeMedia = distancia / tempo;
    res.json({result: `A velocidade média do ${nome}; foi ${velocidadeMedia} km/h.`});
})

router.post("/ex9", (req,res)=>{
    const {salario} = req.body;
    if (salario > 1000) res.json({msg: `Funcionário não tem direito ao aumento`});
    const salarioRes = salario + (salario * 30 / 100);
    res.json({salarioRes});
})


module.exports = router;