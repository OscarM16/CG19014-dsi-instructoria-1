import * as fs from 'fs';

class Archivo {
    nombre:string[];
    constructor(NombredelArchivo: string[]) {
       this.nombre=NombredelArchivo;
    }

    LeerElArchivo() {
        let ContenidoArchivo = fs.readFileSync(this.nombre[0], 'utf8');
        console.log(ContenidoArchivo);
    }
}

const Arraydelcliente = process.argv.slice(2);

let imprimir = new Archivo(Arraydelcliente);
imprimir.LeerElArchivo()