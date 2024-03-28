const model = require("../models/Comanda");

const ComandaController = {
    getAll: async(req,res)=>{
        const Comanda = await model.find();
        res.json(Comanda);
    },
    getById: async(req,res)=>{
       try {
            const Comanda = await model.findById(req.params.id);
            res.json(Comanda);  
       } catch (error) {
           res.status(404).json({erro: "Comanda não encontrado"});
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
           res.status(404).json({erro: "Comanda não encontrado"});
       }
    },
    update: async (req,res)=>{
        try {
            res.json(await model.findByIdAndUpdate(req.params.id,req.body)); 
       } catch (error) {
           res.status(404).json({erro: "Comanda não encontrado"});
       }
        
    }
}

module.exports = ComandaController;