const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Cnab = sequelize.define('cnab', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
     },
     tipo: {
        allowNull: false,
        type: Sequelize.INTEGER
     },
     banco: {
        allowNull: false,
        type: Sequelize.STRING 
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
     conteudo: {
        allowNull: false,
        type: Sequelize.STRING
     },
});

module.exports = Cnab;