const CnabHeader = require ('../model/cnabHeader');

module.exports = {
    async index(request, response) {
        const cnabHeader = await CnabHeader.find();
        return response.json(cnabHeader);
    },

    async store(request, response) {
        const { nome_campo, inicio, fim, tamanho, obrigatorio, conteudo } = request.body;

        let cnabHeader = await CnabHeader.create({
            nome_campo,
            inicio,
            fim,
            tamanho,
            obrigatorio,
            conteudo,
        });

        return response.json(cnabHeader);
    }
}