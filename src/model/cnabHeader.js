const mongoose = require('mongoose');

const CnabHeader = new mongoose.Schema({
    nome_campo: String,
    inicio: String,
    fim: String,
    tamanho: String,
    conteudo: String,    
});

module.exports = mongoose.model('CnabHeader', CnabHeader);