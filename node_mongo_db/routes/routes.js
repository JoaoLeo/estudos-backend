const express = require("express");
const produto = require("../models/Produto");
const router = express.Router();

// const introducao = require("./");

router.get("/",(req,res)=>{
    res.send("API rodando");
})

router.get("/produtos",async (req,res)=>{
    res.json(await produto.find());
})

router.get("/produtos/:id",async (req,res)=>{
    res.json(await produto.findById(req.params.id));
})

router.post("/produtos",async (req,res)=>{
    res.json(await produto.create(req.body));
})

router.delete("/produtos/:id",async (req,res)=>{
    res.json(await produto.findByIdAndDelete(req.params.id));
})

router.put("/produtos/:id",async (req,res)=>{
    res.json(await produto.findByIdAndUpdate(req.params.id,req.body));
})


// router.use("/",introducao);

module.exports = router;