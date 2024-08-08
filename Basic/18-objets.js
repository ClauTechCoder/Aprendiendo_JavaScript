// Aprender qué son, cómo usarlos y para qué sirven los objetos. Es todo dato que no es primitivo
// Es una coleccion de propiedades, a nivel estructural se parecen a los mapas.Puede contener todo tipo de datos.

// Declaracion, aqui dentro puede haber de todo; funciones,. propiedades....
let person = { //instancia única
    name: "John",
    age: 21,
    alias:"Johnny"
}

// Operaciones/Propiedades/Métodos

console.log(person.name) // accedo a la propiedad de ese objeto
console.log(person["name"]) //ptra manera de acceder a esa propiedad del objeto

person.name= "John Bravo" // he modificado esa propiedad
person.age = "21" //tbn puedo cmambiar tipo de dato int->string

delete person.alias // elimino la propiedad del objeto
console.log(person) // ya no existe esa propiedad

person.email = "john@example.com" // asi añado una propiedad, por corchetes tbn valdria

let person2 ={ 
    name: "Juan",
    age: 54,
    alias:"Juanito",
    walk: function(){
        console.log("La persona camina")
    }
}
person2.walk() //lllamamos a la funcion la cual es propiedad del objeto

let person3 ={ 
    name: "Juan",
    age: 54,
    alias:"Juanito",
    walk: function(){
        console.log("La persona camina")
    },
    job:{ // Esto es un objeto dentro de otro objeto -> anidé objetos
        name: "Programador",
        exp: 3.4,
        work: function(){
            //accedo a una propiedad que esta dentro del propio objeto con el this.propiedad -> sale Programador
            console.log(`Ahora mismo yo el ${this.name} me encuentro trabajado.`) 
        }
    }
}
console.log(person3)
console.log(person3.job.work()) // asi accedo a las propiedades de ese "Subobjeto"

let person4 = {
    name: "Ana",
    age: 17,
    alias:"Anita",
    email: "anita@example.es"
}
let person5 = {
    name: "Ana",
    age: 17,
    alias:"Anita",
    email: "anita@example.es"
}

console.log(person4 == person5) // Si son iguales por que sale false? Pruebo con identidad
console.log(person4 === person5) // Si son iguales por que sale false? Por identidad tampoco funciona ujum
// Los objetos se guardan en memoria con una referencia (direccion de memoria), estabamos comprobando eso y jamas seran iguales puesto de esta manera.

// La solucion sería comprobar propiedad a propiedad
console.log(person4.name == person5.name) // ahora si sale true

// Accedo a la informacion.
for(let key in person4){ // te da los campos name, alias, age pero no sus valores. Con in funciona con of no.
    console.log(key + ": " + person4[key]); // con corchetes y todo esto si me sale clave-valor
}

// Combino Funciones y Objetos y lo que me sale es una function objeto 

function Person(name,age){ //esto es como un constructor. Los puntitod dicen que esto deberia de ser una clase
    this.name = name
    this.age = age
}

let person6 = new Person("Bea",25) //es un objeto creado a partir de una funcion
console.log(person6)

