const db = require('../database/database');
const CnabManual = require('../model/cnabManual');
const CnabFormula = require ('../model/cnabFormula');

exports.cadastrarFormula = async (produto, nomeFormula, formula, variaveis) => {
    if (!produto || !nomeFormula || !formula || !variaveis) {
        throw Error ("Todos os parâmetros devem ser preenchidos.");
    } else if (typeof(variaveis) !== "object") {
        throw Error ("Variáveis devem ser um Array.");
    }

    return await CnabFormula.create({ produto, nomeFormula, formula, variaveis });
}

exports.executarFormula  = async (produto, nomeFormula, idFormula, variaveis) => {
    let formula = await CnabFormula.findOne({ where: { produto, id: idFormula } });
    if (formula) {
        formula = formula.dataValues.formula;
        const resultado = await db.query(formula);
        teste =JSON.parse(JSON.stringify(resultado[0]));
        console.log(teste[0]['SUM(campo_22)'])
    }
}