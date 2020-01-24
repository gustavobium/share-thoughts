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
    variaveis: {
        allowNull: false,
        type: Sequelize.TEXT,
        get: function () { 
            return JSON.parse(this.getDataValue('variaveis'));
        },
        set: function (val) { 
            return this.setDataValue('variaveis', JSON.stringify(val));
        },
    }
});

module.exports = CnabFormula;