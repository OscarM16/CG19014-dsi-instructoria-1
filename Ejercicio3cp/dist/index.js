"use strict";
exports.__esModule = true;
var fs = require("fs");
console.log("Ejercicio 3 CP");
// Pido el documento de texto 1
var fileName1 = process.argv.slice(2);
// Pido el documento de texto 2
var fileName2 = process.argv.slice(3);
// Leo el documento de texto 1
var fileContent1 = fs.readFileSync(fileName1[0], 'utf8');
// Pido el documento de texto 2
console.log("El archivo de texto llamado: " + fileName1[0] + ": ");
console.log("Tomamos una decicios ya sea la opcion A,B o C");
// console.log(fileContent2);
if (fs.existsSync(fileName2[0])) {
    // Esta opcion se hara cuando el primer archivo a copiar como el segundo de destino existen
    console.log("Paso a la opcion A");
    var fileContent2 = fs.readFileSync(fileName2[0], 'utf8');
    var archivoConjunto = fs.writeFileSync(fileName2[0], fileContent2 + " " + fileContent1);
    var leerarchivoConjunto = fs.readFileSync(fileName2[0], 'utf8');
    console.log("EL archivo " + fileName2[0] + " modificado contiene: ");
    console.log(leerarchivoConjunto);
}
else {
    if (fileName2[0] == null) {
        // Esta opcion se hara cuando no se ha indicado un archivo de destino
        console.log("Paso a la opcion C");
        var nomnredelarchivoCopia = fileName1[0].slice(0, -4);
        var Nombrefinal = nomnredelarchivoCopia + "-Copy" + ".txt";
        var archivoCreado = fs.writeFileSync(Nombrefinal, fileContent1);
        var fileContent3 = fs.readFileSync(Nombrefinal, 'utf8');
        console.log("EL archivo " + Nombrefinal + " creado contiene: ");
        console.log(fileContent3);
    }
    else {
        // Esta opcion se hara cuando se ingresa un archivo de destino que no existe
        console.log("Paso a la opcion B");
        var barchivoConjunto = fs.writeFileSync(fileName2[0], fileContent1);
        var bleerarchivo = fs.readFileSync(fileName2[0], 'utf8');
        console.log("EL archivo " + fileName2[0] + " creado contiene: ");
        console.log(bleerarchivo);
    }
}
