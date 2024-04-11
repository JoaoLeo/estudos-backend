const { urlencoded } = require("express");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
const routes = require("../revisao/routes/routes");

const conn = require("../revisao/db/conn");
conn();

app.use("/",routes);

app.listen(8080, (e)=>{ if(e) console.log(e); else console.log("Servidor rodando na porta 8080");});

