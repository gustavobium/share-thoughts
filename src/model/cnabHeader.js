const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const CnabHeader = sequelize.define('cnabheader', {
    id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
    },
    nome_campo: {
    allowNull: false,
    type: Sequelize.STRING 
    },
    inicio: {
    allowNull: false,
    type: Sequelize.STRING
    },
    fim: {
    allowNull: false,
    type: Sequelize.STRING
    },
    tamanho: {
    allowNull: false,
    type: Sequelize.STRING
    },
    obrigatorio: {
    allowNull: false,
    type: Sequelize.STRING
    },
    conteudo: {
    allowNull: false,
    type: Sequelize.STRING
    },
});

module.exports = CnabHeader;