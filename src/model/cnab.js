const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Cnab = sequelize.define('cnab', {
   id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
   },
   produto: {
      allowNull: false,
      type:Sequelize.STRING
   },
   parte: {
      allowNull: false,
      type:Sequelize.STRING
   },
   tipo_conteudo: {
      allowNull: true,
      type:Sequelize.STRING
   },
   campo_1: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_2: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_3: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_4: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_5: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_6: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_7: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_8: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_9: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_10: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_11: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_12: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_13: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_14: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_15: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_16: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_17: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_18: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_19: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_20: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_21: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_22: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_23: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_24: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_25: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_26: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_27: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_28: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_29: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_30: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_31: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_32: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_33: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_34: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_35: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_36: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_37: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_38: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_39: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_40: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_41: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_42: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_43: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_44: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_45: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_46: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_47: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_48: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_49: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_50: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_51: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_52: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_53: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_54: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_55: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_56: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_57: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_58: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_59: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_60: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_61: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_62: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_63: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_64: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_65: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_66: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_67: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_68: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_69: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_70: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_71: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_72: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_73: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_74: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_75: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_76: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_77: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_78: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_79: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   campo_80: {
   allowNull: true,
   type:Sequelize.TEXT
   },
   
});

module.exports = Cnab;