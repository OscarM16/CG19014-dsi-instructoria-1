import * as fs from 'fs';
console.log("Ejercicio 3 CP")
const fileName1: string = 'ejemplo1.txt';
let fileContent1 = fs.readFileSync(fileName1, 'utf8');
const fileName2: string = 'ejemplo2.txt';
let fileContent2 = fs.readFileSync(fileName2, 'utf8');
console.log(fileContent1);
console.log(fileContent1);
let archivoConjunto = fs.writeFileSync("NuevoDoc.txt",fileContent1+fileContent2)
const fileName3: string = 'NuevoDoc.txt';
let fileContent3 = fs.readFileSync(fileName3, 'utf8');
console.log(fileContent3)
