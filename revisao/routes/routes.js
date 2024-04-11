const express = require("express");
const router = express.Router();

const controller = require("../controllers/AlunoController");

router.get("/",(req,res)=>{
    res.send("API rodando");
})

router.post("/salvar-aluno", (req,res) => controller.insert(req,res));

router.get("/alunos", (req,res) => controller.getAll(req,res));

router.get("/alunos-reprovados", (req,res) => controller.getAllReprovado(req,res));

router.get("/alunos-recuperacao", (req,res) => controller.getAllRecuperacao(req,res));

router.get("/alunos-aprovados", (req,res) => controller.getAllAprovado(req,res));

router.put("/mudar-turma",(req,res) => controller.update(req,res));

router.delete("/apagar-testes",(req,res) => controller.delete(req,res));

module.exports = router;