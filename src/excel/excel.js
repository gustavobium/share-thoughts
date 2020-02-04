const cnabController = require('../controller/cnabController');

const CnabManual = require('../model/cnabManual');
const Cnab = require('../model/cnab');

async function index() {
    // await cnabController.inserirManual("manual mezzo.xlsx", "FIDC Mezzo", "remessa");
    // await cnabController.inserirCnab("FIDC Mezzo", "Cessão_FIDC Mezzo 21012020.rem");   
    await cnabController.inserirFormula('FIDC Mezzo', 'Soma valor de aquisição', 'SELECT SUM(campo_22) as result FROM `share-thoughts`.cnabs WHERE produto =\'FIDC Mezzo\'', []);
    // await cnabController.removerFormula('FIDC Mezzo', 'Soma valor de aquisição');
    // await cnabController.executarFormula('FIDC Mezzo', 'Soma valor de aquisição', 2);
};

index();