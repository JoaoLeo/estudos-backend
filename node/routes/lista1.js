const express = require("express");
const router = express.Router();


router.post("/ex1" ,(req,res)=>{
    let n1 = Number(req.body.n1);
    let n2 = Number(req.body.n2);
    let n3 = Number(req.body.n3);
    let n4 = Number(req.body.n4);

    const media = (n1 + n2 + n3 + n4) / 4;
    let retorno = {};
    if((n1 > 10) || (n2 > 10) || (n3 > 10) ||( n4 > 10)){
        res.status(400).json({erro : "Erro! Uma nota não pode passar de 10"})
    }
    else  {
        retorno.msg = media >= 7 ? "Aprovado" : "Reprovado"
        res.status(200).json(retorno);
    }
})

router.post("/ex2" ,(req,res)=>{

let eleitores =  Number(req.body.total);
let brancos = Number(req.body.branco);
let nulos =  Number(req.body.nulos);
let validos =  Number(req.body.validos);

const total = brancos + nulos + validos;
    if(total > eleitores){
        res.status(500).json({erro :  "Erro! O numero de votos não pode passar o total de eleitores"});
    }
    else  {

        const percBranco = brancos / total * 100;
        const percNulo = nulos / total * 100;
        const percValidos = validos / total * 100;
        const retorno = {
            brancos: percBranco,
            nulos: percNulo,
            validos: percValidos
        }
        res.status(200).json(retorno);
    }

})

router.post("/ex3" ,(req,res)=>{
    let salario = Number(req.body.salario);
    let percentual = Number(req.body.percentual);
    salario += salario * percentual / 100
    res.status(200).json({salario});
    })

router.post("/ex4" ,(req,res)=>{
    const percDistrubuidor = 28;
    const impostos = 45;
    let custoFabrica = Number(req.body.custo)
    let custoF2 = custoFabrica + (custoFabrica * percDistrubuidor) / 100;
    let custoF3 = custoFabrica + (custoFabrica * impostos) / 100;
    let custoFinal = custoFabrica + custoF2 + custoF3;
    res.status(200).json({salacustoFinalrio});
    })


module.exports = router;

