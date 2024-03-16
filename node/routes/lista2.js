const express = require("express");
const router = express.Router();


router.post("/ex1", (req,res)=>{
    const {qtdMinima, qtdMaxima} = req.body;
    let estoqueMedio = (qtdMinima+qtdMaxima) / 2 ;
    res.json({estoqueMedio})
})

router.post("/ex2", (req,res)=>{
    const {nome, numHoras,valorPorHora,numFilho} = req.body;
    let salarioBruto = valorPorHora * numHoras;
    let salario = ((3 * numFilho / 100) + salarioBruto);
    res.json({salario})
})



module.exports = router;