
// Cómo exportarlo, qué son y para qué se usan. Tiene extension .mjs
// Es dividir el código en piezas y archivos separados para poder usarlos. Manera de ordenar.
// Si ahces un packge.json como ayuda a esto no hace fala la extension .mjs.
// Este archivo no le damos al run es mas util en el import que es lo que usamos al final.

// EXPORTAR POR DEFECTO UNA FUNCION -> uso la palabra reservada default

export default function hello() {
    console.log("hello")
}

// EXPORTAR POR DEFECTO UNA PROPIEDAD/VARIABLE -> NO SE PUEDE NO TIENE SENTIDO
// export default name = "Paquito"

// EXPORTAR POR DEFECTO UNA CLASE

export default class MyClass {
    
    infoClass() {
        console.log("DEFAULT CLASS")
    }

}

// EXPORTAR FUNCIONES

export function add(a, b){ // para exportar correctamente la funcion -> export
    return a + b
}

// EXPORTAR PROPIEDADES/VARIABLES

export const PI = 3.1416
export let myVar = "variable"

// EXPORTAR CLASES

export class MyClassCircle  {

    constructor (radius) {
        this.radius = radius
    }

    areaCircle (radius) {
        return Math.PI * Math.pow(this.radius, 2) // podemos importar metodos de la clase Math
    }

    perimeterCircle(radius){
        return 2 * Math.PI * this.radius
    }

}





