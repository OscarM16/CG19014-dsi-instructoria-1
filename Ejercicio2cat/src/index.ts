import * as fs from 'fs';

class Archivo {
    nombre:string;
    constructor(NombredelArchivo:string) {
       this.nombre=NombredelArchivo;
    }

    LeerElArchivo() {
        let ContenidoArchivo = fs.readFileSync(this.nombre, 'utf8');
        console.log(ContenidoArchivo);
    }
}

let imprimir = new Archivo("ejemplo.txt");
imprimir.LeerElArchivo()