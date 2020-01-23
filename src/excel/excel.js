// const cnabManualController = require('../controller/cnabManualController');
const cnabManual = require('../model/cnabManual');
const cnab = require('../model/cnab');
const cnabController = require('../controller/cnabController');
// const cnabController = require('../model/cnabController');
const path = require('path');
const sequelize = require('sequelize');

// Cadastra o manual dentro deste diretório
// cnabManualController.salvarManual('cnab.xlsx', 'FIDC Insole', 'remessa');

// Gerar o CNAB
// cnabController.gerarCnab('FIDC Insole', path.resolve(__dirname, 'Cessão FIDC Insole 26122019.REM'));

// Somar um campo inteiro
async function somar(nome_campo, produto) {
    const campo = await cnabManual.findOne({where: { nome_campo: nome_campo }});
    if (campo) {
        num = campo.dataValues.num;
        const results = await cnab.query(`SELECT SUM(campo_${num}) WHERE produto = ${produto}`).then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
        // console.log(results);
    }
}

somar('Valor do Título', 'FIDC Insole');