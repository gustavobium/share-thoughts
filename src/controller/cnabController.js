const fs = require('fs');
const db = require('../database/database');
const Excel = require('exceljs');
const path = require('path');
const username = require('os').userInfo().username;

const Cnab = require('../model/cnab');
const CnabManual = require('../model/cnabManual');
const CnabFormula = require ('../model/cnabFormula');

exports.inserirManual = async (manual, produto, tipo_arquivo) => {
    const wb = new Excel.Workbook();
    const filePath = path.resolve(`C:\\Users\\${username}\\Documents\\GitHub\\share-thoughts\\src\\excel\\`, manual);

    wb.xlsx.readFile(filePath).then(async function(){
        const ws = wb.getWorksheet("Planilha1");

        partes = {
            header: null,
            detail: null,
            trailler: null
        }

        ws.eachRow(async function(row, rowNumber) {
            if (rowNumber > 1) {
                num = row.getCell(1).value;
                nome_campo = row.getCell(2).value;
                inicio = row.getCell(3).value;
                fim = row.getCell(4).value;
                tamanho = row.getCell(5).value;
                tipo_conteudo = row.getCell(7).value;
                casas_decimais = row.getCell(8).value;
                conteudo = row.getCell(9).value;

                if (num == 1 && partes.header == null) {
                    partes.header = "header";
                    parte = "header";
                } else if (num == 1 && partes.header !== null && partes.detail == null) {
                    partes.detail = "detail";
                    parte = "detail";
                } else if (num == 1 && partes.header !== null && partes.detail !== null && partes.trailler == null) {
                    partes.trailler = "trailler";
                    parte = "trailler";
                }
                
                if (row.getCell(6).value == "Sim" || row.getCell(6).value == "sim") {
                    obrigatorio = true;
                } else {
                    obrigatorio = false;
                }

                await CnabManual.create({
                    produto,
                    num,
                    nome_campo,
                    inicio,
                    fim,
                    tamanho,
                    obrigatorio,
                    tipo_conteudo,
                    casas_decimais,
                    conteudo,
                    tipo_arquivo,
                    parte,
                })
                .then(() => {
                    return true;
                })
                .catch(error => {
                    throw Error(error);
                });
            }        
        });
    }).catch(error => {
        throw Error (error);
    });
}

exports.inserirCnab = async (produto, arquivo) => {
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

exports.inserirFormula = async (produto, nomeFormula, formula, variaveis) => {
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