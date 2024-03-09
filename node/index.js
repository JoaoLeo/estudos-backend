const { urlencoded } = require("express");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const lista1 = require("./routes/lista1");
const introducao = require("./routes/introducao");


app.use("/",introducao);
app.use("/lista1", lista1);


app.listen(8080, (e)=>{ if(e) console.log(e); else console.log("Servidor rodando na porta 8080");});