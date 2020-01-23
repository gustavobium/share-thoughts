const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const CnabManual = sequelize.define('cnabmanual', {
    id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
    },
    produto: {
        allowNull:false,
        type: Sequelize.STRING
    },
    parte: {
        allowNull: false,
        type: Sequelize.STRING
    },
    num: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    nome_campo: {
    allowNull: false,
    type: Sequelize.STRING 
    },
    inicio: {
    allowNull: false,
    type: Sequelize.INTEGER
    },
    fim: {
    allowNull: false,
    type: Sequelize.INTEGER
    },
    tamanho: {
    allowNull: false,
    type: Sequelize.INTEGER
    },
    obrigatorio: {
    allowNull: false,
    type: Sequelize.BOOLEAN
    },
    tipo_conteudo: {
        allowNull: false,
        type: Sequelize.STRING
    },
    casas_decimais: {
        allowNull: true,
        type: Sequelize.INTEGER
    },
    conteudo: {
    allowNull: false,
    type: Sequelize.STRING(1000)
    },
    tipo_arquivo: {
        allowNull: false,
        type:Sequelize.STRING
    }
});

module.exports = CnabManual;