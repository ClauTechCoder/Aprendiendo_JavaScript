
//Aprendo a guardar en memoria valores/referencias para operar con los datos más adelante.
//Se puede crear con var(valor no constante), let o const(valor fijo); nombre = valor_variable
//Nombre debe ser descriptivo, regla lowercamelcase(empieza en minúscula)

var helloWorld = "¡Hola Mundo!"
helloWorld = "ahora no xd!"
console.log(helloWorld) //"imprimo" la variables, al ser var puedo modificar su valor.

let helloWorld2 = "¡Hola Mundo 2!"
helloWorld2 = "ahora no xd 2!"
console.log(helloWorld2) //aparentemente igual que var, pero soloa cceisble dentro un bloque

const helloWorld3 = "¡Hola Mundo 3!" //Para "variar" su valor usamos referencias.
//helloWorld3 = "ahora no xd 3!" NO ES POSIBLE
console.log(helloWorld3) // no puede reasignarse su valor. Es valor constante.


