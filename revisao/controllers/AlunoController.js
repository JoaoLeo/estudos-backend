const model = require("../models/Aluno");

const AlunoController = {
    getAll: async(req,res)=>{
        const alunos = await model.find();
        res.json(alunos);
    },
    getAllReprovado: async(req,res)=>{
        const alunos = await model.find({ media: { $lt: 5 } });
        res.json(alunos);
    },
    getAllRecuperacao: async(req,res)=>{
        const alunos = await model.find({ media: { $gte: 5, $lt: 6.9 } });
        res.json(alunos);
    },
    getAllAprovado: async(req,res)=>{
        const alunos = await model.find({ media: { $gte: 7 } });
        res.json(alunos);
    },
    insert: async (req,res) => {
        try {
            const turma = req.body.turma;
            const notas = req.body.notas;
            const aluno = {};
            let soma = 0;
            for (const nota of notas) {
                if(nota < 0 || nota > 10) {
                    res.status(400).json({msgErro: "Nota inválida"});
                }
                    else soma += nota;
            }
            // notas.forEach(nota => {
                
            // });
            if(turma != "A" &&  turma != "B" && turma != "C" && turma != "D" && turma != "E"){
                return res.status(400).json({msgErro: "turma inválida"});
            }
            const media = soma / notas.length;
            aluno.nome = req.body.nome;
            aluno.turma = req.body.turma;
            aluno.notas = req.body.notas;
            aluno.media = media;
            res.json(await model.create(aluno));
       } catch (error) {
            console.log(error);
           res.status(400).json(error);
       }
    },
    delete:async (req,res)=>{
        try {
            const result = await model.deleteMany({ nome: "Teste" });

            res.json({ message: `Foram excluídos alunos com nome "Teste".` });
       } catch (error) {
           res.status(404).json({erro: "Aluno não encontrado"});
       }
    },
    update: async (req,res)=>{
        try {
            const result = await model.updateMany({ turma: 'E' }, { turma: 'B' });
            res.json({ message: `Foram atualizados alunos da turma E para a turma B.` });
       } catch (error) {
           res.status(404).json({erro: "Aluno não encontrado"});
       }
        
    }
}

module.exports = AlunoController;