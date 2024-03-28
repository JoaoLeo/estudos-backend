

const model = require("../models/Funcionario");

const FuncionarioController = {
    getAll: async(req,res)=>{
        const Funcionario = await model.find();
        res.json(Funcionario);
    },
    getById: async(req,res)=>{
       try {
            const Funcionario = await model.findById(req.params.id);
            res.json(Funcionario);  
       } catch (error) {
           res.status(404).json({erro: "Funcionario não encontrado"});
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
           res.status(404).json({erro: "Funcionario não encontrado"});
       }
    },
    update: async (req,res)=>{
        try {
            res.json(await model.findByIdAndUpdate(req.params.id,req.body)); 
       } catch (error) {
           res.status(404).json({erro: "Funcionario não encontrado"});
       }
        
    }
}

module.exports = FuncionarioController;