import * as fs from 'fs';
// let fileName: string = "ejemplo.txt"
// let fileContent = fs.readFileSync(fileName, 'utf8');
// console.log(fileContent);

class Archivo {
    nombre:string;
    constructor(NombredelArchivo:string) {
       this.nombre=NombredelArchivo;
    }

    LeerElArchivo() {
        let fileContent = fs.readFileSync(this.nombre, 'utf8');
        console.log(fileContent);
    }
}

let imprimir = new Archivo("ejemplo.txt");
imprimir.LeerElArchivo()