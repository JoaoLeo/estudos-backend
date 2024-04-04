const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nome: {
        type: String,
        minLength: 2
    },
    preco: Number,
    tamanho: String,
    tipo: String,
    ingredientes: []
});

const Produto = mongoose.model("Produto", schema);

module.exports = Produto;