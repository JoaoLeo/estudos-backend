

const model = require("../models/Cliente");

const ClienteController = {
    getAll: async(req,res)=>{
        const Cliente = await model.find();
        res.json(Cliente);
    },
    getById: async(req,res)=>{
       try {
            const Cliente = await model.findById(req.params.id);
            res.json(Cliente);  
       } catch (error) {
           res.status(404).json({erro: "Cliente não encontrado"});
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
           res.status(404).json({erro: "Cliente não encontrado"});
       }
    },
    update: async (req,res)=>{
        try {
            res.json(await model.findByIdAndUpdate(req.params.id,req.body)); 
       } catch (error) {
           res.status(404).json({erro: "Cliente não encontrado"});
       }
        
    }
}

module.exports = ClienteController;