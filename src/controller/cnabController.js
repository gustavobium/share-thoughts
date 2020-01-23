const fs = require('fs');
const Cnab = require('../model/cnab');
const CnabManual = require('../model/cnabManual');

exports.gerarCnab = async (produto, arquivo) => {
    const readStream = fs.createReadStream(arquivo, {encoding: 'utf8'});

    readStream.on('data', async data => {
        const cnab = data.split(/\n/);
        const header = cnab[0];
        const trailler = cnab[cnab.length-2];

        // Verificando se existe na db o registro de um manual do mesmo tipo do CNAB.
        const headerManual = await CnabManual.findOne({ where: { fim: header.length-1, parte: "header", produto} });
        
        // Inserindo o HEADER
        if (headerManual) {
            const cnabHeader = await CnabManual.findAll({ where: { parte: "header", produto} });
    
            // Crio um JSON vazio onde será inserido todas informações do header
            var headerQuebrado = {
                produto,
                parte: 'header',
            };
    
            // Separando o header em um JSON
            for (regra of cnabHeader) {
                let { num, inicio, fim, tamanho, casas_decimais } = regra.dataValues;       
                headerQuebrado[`campo_${num}`] = header.substr(inicio-1, tamanho);            
            }
            
            // Insert do header
            await Cnab.create(headerQuebrado);

        } else {
            return "CNAB não cadastrado.";
        }
    
        // Inserindo o detail
        const detailManual = await CnabManual.findOne({ where: { fim: header.length-1, parte: "detail", produto} });
    
        if (detailManual) {
            const cnabDetail = await CnabManual.findAll({ where: { parte: "detail", produto } });
            // Crio um JSON vazio onde será inserido todas informações do header    
            // Para cada linha do CNAB
            for (let i = 0; i < cnab.length; i++) {
                let detail = cnab[i];
    
                var detailQuebrado = {
                    produto,
                    parte: 'detail',
                };
                
                if (i > 0 && i < cnab.length-2) {
                    // Separando o detail em um JSON
                    for (regra of cnabDetail) {
                        let { num, inicio, fim, tamanho, casas_decimais } = regra.dataValues;
    
                        if (casas_decimais !== null) {
                            valor = detail.substr(inicio-1, tamanho-casas_decimais) + "." + detail.substr(inicio-1+(tamanho-casas_decimais), casas_decimais);
                        } else {
                            valor = detail.substr(inicio-1,tamanho);
                        }                        
                        detailQuebrado[`campo_${num}`] = valor;            
                    }    
                    // Insert do detail
                    await Cnab.create(detailQuebrado);    
                }
            }        
    
        } else {
            return "CNAB não cadastrado.";
        }
    
        const traillerManual = await CnabManual.findOne({ where: { fim: header.length-1, parte: "trailler", produto} });
        
        // Inserindo o trailler
        if (traillerManual) {
            const cnabTrailler = await CnabManual.findAll({ where: { parte: "trailler", produto } });
    
            // Crio um JSON vazio onde será inserido todas informações do trailer
            var traillerQuebrado = {
                produto,
                parte: 'trailer',
            };
    
            // Separando o trailer em um JSON
            for (regra of cnabTrailler) {
                let { num, inicio, fim, tamanho, casas_decimais } = regra.dataValues;
        
                traillerQuebrado[`campo_${num}`] = trailler.substr(inicio-1,tamanho);            
            }
            
            // Insert do trailer
            await Cnab.create(traillerQuebrado);    
            
        } else {
            return "CNAB não cadastrado.";
        }    
    });
}