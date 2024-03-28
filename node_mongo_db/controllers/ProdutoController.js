const model = require("../models/Produto");

const ProdutoController = {
    getAll: async(req,res)=>{
        const produtos = await model.find();
        res.json(produtos);
    },
    getById: async(req,res)=>{
       try {
            const produto = await model.findById(req.params.id);
            res.json(produto);  
       } catch (error) {
           res.status(404).json({erro: "Produto não encontrado"});
       }
    },
    insert: async (req,res) => {
        try {
            res.json(await model.create(req.body));
       } catch (error) {
           res.status(400).json(error);
       }
    },
    delete:async (req,res)=>{
        try {
            res.json(await model.findByIdAndDelete(req.params.id));
       } catch (error) {
           res.status(404).json({erro: "Produto não encontrado"});
       }
    },
    update: async (req,res)=>{
        try {
            res.json(await model.findByIdAndUpdate(req.params.id,req.body)); 
       } catch (error) {
           res.status(404).json({erro: "Produto não encontrado"});
       }
        
    }
}

module.exports = ProdutoController;