const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const CnabFormula = sequelize.define('cnabformula', {
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
    nomeFormula: {
        allowNull: false,
        type: Sequelize.STRING,
    },
    formula: {
        allowNull: false,
        type: Sequelize.TEXT,
    },
});

module.exports = CnabFormula;