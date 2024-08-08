let myArray = [1,2,3,4]

let person = {
    name: "John",
    age: 21,
    alias:"Johnny"
}

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

    let [element1,element2] = myArray
    console.log(element1)
    console.log(element2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

    let [e1,e2,e3,e4,e5=0] = myArray
    console.log(e1,e2,e3,e4,e5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

    let {name,age} = person
    console.log(name)
    console.log(age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

    let {name:n,age:a} = person
    console.log(n)
    console.log(a)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

    let person2 = {
        name: "Ana",
        age: 21,
        alias:"Annita",
        job:{
            experience: 15,
            ocupation: "Senior",
            working: true
        }
    }

    let {name:na,job:{experience:e}} = person2
    console.log(na)
    console.log(e)

// 6. Usa propagación para combinar dos arrays en uno nuevo

    let myArray2 = [5,6,7,8,9,10]
    let myNewArray = [...myArray, ...myArray2]
    console.log(myNewArray)

// 7. Usa propagación para crear una copia de un array

    let myCopyArray = [...myNewArray]
    console.log(myCopyArray)

// 8. Usa propagación para combinar dos objetos en uno nuevo

    let otherPerson = {
        drivePermission: true,
        bank: "IBAN123456789",
        Ocupattion: "Marriage"
    }

    let totalPerson = {...person, ...otherPerson}
    console.log(totalPerson)

// 9. Usa propagación para crear una copia de un objeto

    let copyPerson = {...totalPerson}
    console.log(copyPerson)

// 10. Combina desestructuración y propagación

    let fantasticPerson = {...totalPerson, ...person2}
    console.log(fantasticPerson)
    let {drivePermission:dp,name:nam} = fantasticPerson
    console.log(dp,nam)

