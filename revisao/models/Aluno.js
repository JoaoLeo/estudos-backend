const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nome: String,
    turma: {
        type: String,
        uppercase: true
    },
    notas: [],
    media: Number
});

const Aluno = mongoose.model("Aluno", schema);

module.exports = Aluno;