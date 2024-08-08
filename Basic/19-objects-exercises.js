// 1. Crea un objeto con 3 propiedades

let myCar= {
    wheels: 4,
    color: "Red",
    doors: 2
}

// 2. Accede y muestra su valor

    console.log(myCar.wheels)
    console.log(myCar.color)
    console.log(myCar.doors)

// 3. Agrega una nueva propiedad

    myCar.motor= 3800
    console.log(myCar)

// 4. Elimina una de las 3 primeras propiedades

    delete myCar.wheels
    console.log(myCar)

// 5. Agrega una función e invócala

    myCar.drive = function(){
        console.log("You can drive this car.")
    }
    myCar.drive()

// 6. Itera las propiedades del objeto

    for(value in myCar){
        console.log(value + ": " + myCar[value]) 
    }

// 7. Crea un objeto anidado

    myCar.conductor = {
        name: "pepe",
        age: 18,
        alias: "pepito"
    }

// 8. Accede y muestra el valor de las propiedades anidadas

    for(i in myCar.conductor){
        console.log(i + ": " + myCar.conductor[i]) 
    }

// 9. Comprueba si los dos objetos creados son iguales

let myCar2 ={
    wheels: 4,
    color: "Red",
    doors: 2,
    motor: 3800,
    drive: function(){
        console.log("You can drive this car.")
    },
    conductor:  {
        name: "pepe",
        age: 18,
        alias: "pepito"
    }
}
    // ES COMPROBAR UNO A UNO SUS PROPIEDADES
    console.log(myCar2.doors == myCar.doors)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(myCar2.motor == myCar2.wheels)