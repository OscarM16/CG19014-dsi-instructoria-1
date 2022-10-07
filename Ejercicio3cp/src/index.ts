import * as fs from 'fs';
console.log("Ejercicio 3 CP")
// Pido el documento de texto 1
const fileName1 = process.argv.slice(2);
// Pido el documento de texto 2
const fileName2 = process.argv.slice(3);
// Leo el documento de texto 1
let fileContent1 = fs.readFileSync(fileName1[0], 'utf8');
// Pido el documento de texto 2
console.log("El archivo de texto llamado: "+ fileName1[0]+ ": ")
console.log("Tomamos una decicios ya sea la opcion A,B o C")
// console.log(fileContent2);
if (fs.existsSync(fileName2[0])) {
    // Esta opcion se hara cuando el primer archivo a copiar como el segundo de destino existen
    console.log("Paso a la opcion A")
    let fileContent2 = fs.readFileSync(fileName2[0], 'utf8');
    let archivoConjunto = fs.writeFileSync(fileName2[0],fileContent2 +" "+fileContent1);
    let leerarchivoConjunto = fs.readFileSync(fileName2[0], 'utf8')
    console.log("EL archivo "+  fileName2[0] +" modificado contiene: ")
    console.log(leerarchivoConjunto);
}else{
    if(fileName2[0] == null){
        // Esta opcion se hara cuando no se ha indicado un archivo de destino
        console.log("Paso a la opcion C")
        let nomnredelarchivoCopia = fileName1[0].slice(0,-4)
        let Nombrefinal= nomnredelarchivoCopia+ "-Copy" + ".txt" 
        let archivoCreado = fs.writeFileSync(Nombrefinal, fileContent1);
        let fileContent3 = fs.readFileSync(Nombrefinal, 'utf8');
        console.log("EL archivo "+  Nombrefinal +" creado contiene: ")
        console.log(fileContent3)
    }else{
        // Esta opcion se hara cuando se ingresa un archivo de destino que no existe
        console.log("Paso a la opcion B")
        let barchivoConjunto = fs.writeFileSync(fileName2[0],fileContent1);
        let bleerarchivo = fs.readFileSync(fileName2[0], 'utf8');
        console.log("EL archivo "+  fileName2[0] +" creado contiene: ")
        console.log(bleerarchivo)
    }
}

