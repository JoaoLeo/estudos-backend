const express = require("express");
const produto = require("../models/Produto");
const router = express.Router();
const produtoController = require("../controllers/ProdutoController");
const clienteController = require("../controllers/ClienteController");
const comandaController = require("../controllers/ComandaController");
const funcionarioController = require("../controllers/FuncionarioController");

router.get("/",(req,res)=>{
    res.send("API rodando");
})

// produtos
router.get("/produtos", (req,res) => produtoController.getAll(req,res));

router.get("/produtos/:id", (req,res) => produtoController.getById(req,res));

router.post("/produtos", (req,res) => produtoController.insert(req,res));
 
router.delete("/produtos/:id",(req,res) => produtoController.delete(req,res));

router.put("/produtos/:id",(req,res) => produtoController.update(req,res));


// clientes
router.get("/clientes", (req,res) => clienteController.getAll(req,res));

router.get("/clientes/:id", (req,res) => clienteController.getById(req,res));

router.post("/clientes", (req,res) => clienteController.insert(req,res));
 
router.delete("/clientes/:id",(req,res) => clienteController.delete(req,res));

router.put("/clientes/:id",(req,res) => clienteController.update(req,res));

// comandas
router.get("/comandas", (req,res) => comandaController.getAll(req,res));

router.get("/comandas/:id", (req,res) => comandaController.getById(req,res));

router.post("/comandas", (req,res) => comandaController.insert(req,res));
 
router.delete("/comandas/:id",(req,res) => comandaController.delete(req,res));

router.put("/comandas/:id",(req,res) => comandaController.update(req,res));

// funcionarios
router.get("/funcionarios", (req,res) => funcionarioController.getAll(req,res));

router.get("/funcionarios/:id", (req,res) => funcionarioController.getById(req,res));

router.post("/funcionarios", (req,res) => funcionarioController.insert(req,res));
 
router.delete("/funcionarios/:id",(req,res) => funcionarioController.delete(req,res));

router.put("/funcionarios/:id",(req,res) => funcionarioController.update(req,res));



module.exports = router;