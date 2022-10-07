"use strict";
exports.__esModule = true;
var fs = require("fs");
var Archivo = /** @class */ (function () {
    function Archivo(NombredelArchivo) {
        this.nombre = NombredelArchivo;
    }
    Archivo.prototype.LeerElArchivo = function () {
        var ContenidoArchivo = fs.readFileSync(this.nombre[0], 'utf8');
        console.log(ContenidoArchivo);
    };
    return Archivo;
}());
var Arraydelcliente = process.argv.slice(2);
var imprimir = new Archivo(Arraydelcliente);
imprimir.LeerElArchivo();
