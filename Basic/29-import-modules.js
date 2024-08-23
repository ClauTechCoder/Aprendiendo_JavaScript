
// Aqui voy a importar los modulos del 28. Aprender cómo usarlo. Extension .mjs

 import hello, { add, PI, myVar, MyClassCircle, MyClass } from "./28-export-modules.js" 
 // asi importo cosas el fichero export


// importo funcion
console.log(add(2,5)) // llamada

// importo propiedades/variables
console.log(PI)
console.log(myVar)

// importo por defecto, no hace falta incluirlo en el import. Exporta sin referencia
// Tambien nos da igual el nombre que le pongamos teoricamente

hello()

// importo una clase y puedo usar sus metodos, constructores....

let circle = new MyClassCircle(3);
console.log(circle.radius)
console.log(circle.areaCircle().toFixed(2)) // only dos decimales
console.log(circle.perimeterCircle().toFixed(2))

// importo una clase por defecto
// let myClass = new MyClass()
// console.log(myClass.inoClass())

/*  IMPORTAR PROYECTO MODULAR (ES DE EJEMPLO)

import {ModularClass} from "./directory/MyModularProject.js" 

*/


