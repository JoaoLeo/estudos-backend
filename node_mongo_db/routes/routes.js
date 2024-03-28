const express = require("express");
const produto = require("../models/Produto");
const router = express.Router();
const controller = require("../controllers/ProdutoController");

// const introducao = require("./");

router.get("/",(req,res)=>{
    res.send("API rodando");
})

router.get("/produtos", (req,res) => controller.getAll(req,res));

router.get("/produtos/:id", (req,res) => controller.getById(req,res));

router.post("/produtos", (req,res) => controller.insert(req,res));
 
router.delete("/produtos/:id",(req,res) => controller.delete(req,res));

router.put("/produtos/:id",(req,res) => controller.update(req,res));


// router.use("/",introducao);

module.exports = router;