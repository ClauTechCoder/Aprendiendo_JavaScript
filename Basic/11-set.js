// Aprendo el concepto del uso del set. Tbn sirve para guardar estrutcturas de datos

let mySet = new Set() // ahora si que tengo que crearlo así si o si

mySet = new Set("Claudia", "Robles", "claclarobles", 24, true) //asi no se incializad el set con datos de inicio
mySet = new Set(["Claudia", "Robles", "claclarobles", 24, true ,"hello"])  //asi si 

console.log(mySet)

// MÉTODOS COMUNES, operaciones que puedo hacer a los sets

mySet.add("balonmano") //añado un dato al set, se mantiene orden de los elementos. Se añade al final
mySet.delete(24) // elimino el elemento tal cual, no puedo pasar un numero. A aprte nos da boolean si existe

console.log(mySet)

console.log(mySet.has("balonmano")) //es como preguntamso/validamos si el elemento existeen el set

console.log(mySet.size) //nos da el tamaño del set, análogo a length

let myArray = Array.from(mySet) //con esto he convertido un un set en un array

let myNewSet = Set(myArray) //con esto he convertido un array en un set

//DIFERENCIA CON EL ARRAY ES QUE EN SET NO HAY ELEMENTOS REPETIDOS, LO QUE TENGO EN EL SET ES ÚNICO.
