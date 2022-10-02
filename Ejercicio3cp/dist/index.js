"use strict";
exports.__esModule = true;
var fs = require("fs");
console.log("Ejercicio 3 CP");
// Pido el documento de texto 1
var fileName1 = 'ejemplo1.txt';
// Leo el documento de texto 1
var fileContent1 = fs.readFileSync(fileName1, 'utf8');
// Pido el documento de texto 2
var fileName2 = '';
console.log("El archivo de texto llamado: " + fileName1 + ": ");
console.log(fileContent1);
console.log("Tomamos una decicios ya sea la opcion A,B o C");
// console.log(fileContent2);
if (fs.existsSync(fileName2)) {
    console.log("Paso a la opcion A");
    var fileContent2 = fs.readFileSync(fileName2, 'utf8');
    var archivoConjunto = fs.writeFileSync(fileName2, fileContent2 + " " + fileContent1);
    console.log(archivoConjunto);
}
else {
    if (fileName2 == "") {
        console.log("Paso a la opcion C");
        var nomnredelarchivoCopia = fileName1.slice(0, -4);
        var Nombrefinal = nomnredelarchivoCopia + "-Copy" + ".txt";
        var archivoCreado = fs.writeFileSync(Nombrefinal, fileContent1);
        var fileContent3 = fs.readFileSync(Nombrefinal, 'utf8');
        console.log(fileContent3);
    }
    else {
        console.log("Paso a la opcion B");
        var barchivoConjunto = fs.writeFileSync(fileName2, fileContent1);
        var bleerarchivo = fs.readFileSync(fileName2, 'utf8');
        console.log(bleerarchivo);
    }
}
