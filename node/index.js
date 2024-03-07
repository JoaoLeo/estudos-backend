const { urlencoded } = require("express");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/" ,(req,res)=>{
    res.send("API rodando");
})

app.get("/hello" ,(req,res)=>{
    res.send("Hello World");
})

app.get("/lista1/ex1" ,(req,res)=>{
    let n1 = 8;
    let n2 = 8;
    let n3 = 8;
    let n4 = 8;

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

app.post("/lista1/ex2" ,(req,res)=>{

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


app.listen(8080, (e)=>{ if(e) console.log(e); else console.log("Servidor rodando na porta 8080");});