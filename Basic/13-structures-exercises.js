// 1. Crea un array que almacene cinco animales

    let myAnimalArray = ["dog", "cat", "cow", "duck", "bird"]

// 2. Añade dos más. Uno al principio y otro al final

    myAnimalArray.unshift("tiger")
    myAnimalArray.push("crocodrile")
    console.log(myAnimalArray)

// 3. Elimina el que se encuentra en tercera posición

    myAnimalArray.splice(2,2)
    console.log(myAnimalArray)

// 4. Crea un set que almacene cinco libros

    let myBookSet = new Set(["book 1", "book 2", "book 3", "book 4", "book 5"])

// 5. Añade dos más. Uno de ellos repetido

    myBookSet.add("Book 6")
    myBookSet.add("Book 2")
    console.log(myBookSet)

// 6. Elimina uno concreto a tu elección
    myBookSet.delete("Book 6")
    console.log(myBookSet)

// 7. Crea un mapa que asocie el número del mes a su nombre

    let myMap = new Map([
        ["Enero",1],
        ["Febrero",2],
        ["Marzo",3],
        ["Abril",4],
        ["Mayo",5],
        ["Junio",6],
        ["Julio",7],
        ["Agosto",8],
        ["Septiembre",9],
        ["Octubre",10],
        ["Noviembre",11],
        ["Diciembre",12]
    ])
    console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
    console.log(myMap.has("Mayo"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
    myMap.set("Verano", ["Mayo","Junio","Agosto"])
    console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

const myTransformArray = [1, 2, 3, 4, 5, 2, 3]
const mySetArray = new Set(myTransformArray);
const MySetMap = new Map();

map.set("SetValues", mySetArray);
console.log(map);

