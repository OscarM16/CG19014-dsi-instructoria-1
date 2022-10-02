import * as fs from 'fs';
console.log("Ejercicio 3 CP")
// Pido el documento de texto 1
const fileName1: string = 'ejemplo1.txt';
// Leo el documento de texto 1
let fileContent1 = fs.readFileSync(fileName1, 'utf8');
// Pido el documento de texto 2
const fileName2: string = '';
console.log("El archivo de texto llamado: "+ fileName1+ ": ")
console.log(fileContent1);
console.log("Tomamos una decicios ya sea la opcion A,B o C")
// console.log(fileContent2);
if (fs.existsSync(fileName2)) {
    console.log("Paso a la opcion A")
    let fileContent2 = fs.readFileSync(fileName2, 'utf8');
    let archivoConjunto = fs.writeFileSync(fileName2,fileContent2 +" "+fileContent1);
    console.log(archivoConjunto);
}else{
    if(fileName2 == ""){
        console.log("Paso a la opcion C")
        let nomnredelarchivoCopia = fileName1.slice(0,-4)
        let Nombrefinal= nomnredelarchivoCopia+ "-Copy" + ".txt" 
        let archivoCreado = fs.writeFileSync(Nombrefinal, fileContent1);
        let fileContent3 = fs.readFileSync(Nombrefinal, 'utf8');
        console.log(fileContent3)
    }else{
        console.log("Paso a la opcion B")
        let barchivoConjunto = fs.writeFileSync(fileName2,fileContent1);
        let bleerarchivo = fs.readFileSync(fileName2, 'utf8');
        console.log(bleerarchivo)
    }
}

