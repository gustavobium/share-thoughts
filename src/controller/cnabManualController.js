const cnabManual = require ('../model/cnabManual');
const Excel = require('exceljs');
const path = require('path');
const username = require('os').userInfo().username;


// TODO: Corrigir o path para onde será salvo o CNAB e o nome da worksheet
exports.salvarManual = (manual, produto, tipo_arquivo) => {
    const wb = new Excel.Workbook();
    const filePath = path.resolve(`C:\\Users\\${username}\\Documents\\GitHub\\share-thoughts\\src\\excel\\`, manual);

    wb.xlsx.readFile(filePath).then(async function(){
        const ws = wb.getWorksheet("Sheet2");

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

                await cnabManual.create({
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
                .catch(error => console.log(error));
            }        
        });
    }).catch(error => console.log(error));
}