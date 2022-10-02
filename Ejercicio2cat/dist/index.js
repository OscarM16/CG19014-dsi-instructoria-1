"use strict";
exports.__esModule = true;
var fs = require("fs");
var Archivo = /** @class */ (function () {
    function Archivo(NombredelArchivo) {
        this.nombre = NombredelArchivo;
    }
    Archivo.prototype.LeerElArchivo = function () {
        var ContenidoArchivo = fs.readFileSync(this.nombre, 'utf8');
        console.log(ContenidoArchivo);
    };
    return Archivo;
}());
var imprimir = new Archivo("ejemplo.txt");
imprimir.LeerElArchivo();
