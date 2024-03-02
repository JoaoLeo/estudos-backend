const express = require("express");
const app = express();

app.listen(8080, (e)=>{ if(e) console.log(e); else console.log("Servidor rodando na porta 8080");});

app.get("/" ,(req,res)=>{
    res.send("API rodando");
})

app.get("/hello" ,(req,res)=>{
    res.send("Hello World");
})