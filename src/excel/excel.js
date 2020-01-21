const Excel = require('exceljs');
const path = require('path');

const wb = new Excel.Workbook();
const filePath = path.resolve(__dirname,'cnab.xlsx');

wb.xlsx.readFile(filePath).then(function(){

    var sh = wb.getWorksheet("Sheet1");
    console.log(sh.getCell("A1").value);
});
