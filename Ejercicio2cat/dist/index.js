"use strict";
exports.__esModule = true;
var fs = require("fs");
// let fileName: string = "ejemplo.txt"
// let fileContent = fs.readFileSync(fileName, 'utf8');
// console.log(fileContent);
var Archivo = /** @class */ (function () {
    function Archivo(NombredelArchivo) {
        this.nombre = NombredelArchivo;
    }
    Archivo.prototype.LeerElArchivo = function () {
        var fileContent = fs.readFileSync(this.nombre, 'utf8');
        console.log(fileContent);
    };
    return Archivo;
}());
var imprimir = new Archivo("ejemplo.txt");
imprimir.LeerElArchivo();
