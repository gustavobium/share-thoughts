const status = require('http-status');
const CnabHeader = require ('../model/cnabHeader');

exports.store = (request, response, next) => {
    const { nome_campo, inicio, fim, tamanho, obrigatorio, conteudo } = request.body;

    CnabHeader.create({
        nome_campo,
        inicio,
        fim,
        tamanho,
        obrigatorio,
        conteudo,
    })
    .then(() => {
        response.status(status.CREATED).send();
    })
    .catch(error => next(error));
};
