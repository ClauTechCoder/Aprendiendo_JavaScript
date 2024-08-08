// Desestructuracion y propagacion lo que aprendo aquí

//DESESTRUCTURACION -> extraer valores de arrays u objetos y asignarlos a variables de manera concisa.

let myArray = [1,2,3,4]

let person = {
    name: "John",
    age: 21,
    alias:"Johnny"
}

let [myValue0, myValue1] = myArray // con los arrays puedo hacerlo de esta manera teniendo valores ya
console.log(myValue0)
console.log(myValue1)


// Ahora si no existe le doy valor por defecto, para ello tiene que tener let delante para declararlo bien
let [myValue00, myValue01, myValue2, myValue3, myValue4 = 0] = myArray 
console.log(myValue00)
console.log(myValue01)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// Ahora quiero ignorar determinados elementos del array, dejo vacios los datos que no me interesan

let [myVal0, , , myVal3] = myArray 
console.log(myVal0)
console.log(myVal3)

let {name, age, alias} = person //para objetos es poner los corchetes bien
console.log(name) 
console.log(age)
console.log(alias)

// Ahora con valor predeterminado, el resto da undefined porque realmente lo que pongo s el nombre de la clave, si no es exactamente ese no lo reconocerá. La manera correcta seria esta:
let {name:name2, name:age2, name:alias2, email = "email@example.com"} = person
console.log(name2) 
console.log(age2)
console.log(alias2)
console.log(email)

 // Ahora con un objeto mas complejo
let person2 ={ 
    name: "Juan",
    age: 54,
    alias:"Juanito",
    walk: function(){
        console.log("La persona camina")
    },
    job:{ 
        name: "Programador",
        exp: 3.4,
        work: function(){
            console.log(`Ahora mismo yo el ${this.name} me encuentro trabajado.`) 
        }
    }
}
let{name: name3,job:{name:namejob}} = person2 //asi lo hago con diferentes niveles,accedo poco a poco entre {}
console.log(name3)
console.log(namejob)


//PROPAGACION -> Su operador  es (...). Permite expandir elementos de array/objetos a otroas array/objetos

let myArray2 = [...myArray,5,6] // asi de simple y puedo añadir mas sin problema para que no sea copia exacta
console.log(myArray2)
// let myArray2 = myArray -> es copiar la referencia no el contenido
let myArray3 = [...myArray2, ...myArray]
console.log(myArray3)

let person3 = {...person,email:"miemail@example.com"} // opera de igual manera que los arrays
console.log(person3)
