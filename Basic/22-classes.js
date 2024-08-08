// Ahora viene lo bueno jeje

class Person{
    constructor(name,age,alias) { // propiedades basica del objeto de la clase
        this.name = name // se suele poner con igual nombre y por eso el this
        this.age = age
        this.alias = alias
    }
}

let person = new Person("ana",26,"anita") // no se llama directamente a = Person() hay que crearla con el new
console.log(person)

class DefaultPerson{
    constructor(name ="Nombre por defecto",age = 0,alias = "sin alias") { // propiedades basica del objeto de la clase con valores por defecto
        this.name = name 
        this.age = age
        this.alias = alias
    }
}
let person2 = new DefaultPerson(name="pepe")
console.log(person2)
console.log(person2.name) // puedo acceder a esta propiedad sin problema
person2.alias = "pepito" //puedo modificar valores de manera fácil
console.log(person2)

class PersonFunctions{
    constructor(name,age,alias) { 
        this.name = name 
        this.age = age
        this.alias = alias
    }
    // puedo crear funcionalidades de la clase sin problema de esta manera. Los llamados Metodos
    walk(){
        console.log("Tiene la capacidad de caminar")
    }
}
let person3 = new PersonFunctions("elena",55,"la ele")
person3.walk() // asi llamo a sus metodos

class PrivatePerson{ //ahora en esta tenemos propiedades privadas, para que no accedan a ciertos datos

    #bank // hay que definirla antes en la clase la propiedad que e sprivada

    constructor(name,age,alias,bank) { 
        this.name = name 
        this.age = age
        this.alias = alias
        this.#bank = bank //el banco es dato privado. Privado si le ponemos # delante
    }
    pay(){
        this.#bank
    }
}

let person4 = new PersonFunctions("jaime",24,"jaimito","IBAN123456789")


class PersonGetterSetter{ // uso los getters para acceder a propiedades privadas

    #name
    #alias
    #age
    #bank

    constructor(name,age,alias,bank) { 
        this.#name = name 
        this.#age = age
        this.#alias = alias
        this.#bank = bank 
    }

    get name(){ // lees la propiedad pero no la puedes modificar
        return this.#name
    }

    set bank(newbank){ //ahora ya puedo escribir sobre esa propiedad privada
        this.#bank = newbank
    }
    get bank(){ 
        return this.#bank
    }
}

let person5 = new PersonGetterSetter("jaime",24,"jaimito","IBAN123456789")
console.log(person5.name) // ahora puedo ver la propiedad de esta manera
person5.bank = "IBAN0000000" 
console.log(person5.bank) // ahora puedo ver la propiedad modificada