
// 1. Crea una función que utilice error correctamente

    function myError(){
        console.error("MENSAJE DE ERROR")
    }
    myError()

// 2. Crea una función que utilice warn correctamente

    function myWarn(){
        console.warn("MENSAJE DE AVISO")
    }
    myWarn()

// 3. Crea una función que utilice info correctamente

    function myInfo(){
        console.warn("MENSAJE DE INFORMACION")
    }
    myInfo()

// 4. Utiliza table

    let dataTable = [
        {namePet:"PIMPI", typePet:"pajaro"},
        {namePet:"ROSA", typePet:"perro"},
        {namePet:"LUNA", typePet:"gato"},
        {namePet:"JACK", typePet:"perro"},
    ]
    console.table(dataTable)

// 5. Utiliza group

    console.group(dataTable)

// 6. Utiliza time

    console.time("MIDIENDO EL TIEMPO")

    let i = 0
    while(i < 10000000){
        i++
    }

    console.timeEnd("MIDIENDO EL TIEMPO")

// 7. Valida con asssert si un número es positivo

    function esPar(numero) {
        return numero % 2 === 0
    }

    let numero = 2

    console.assert(esPar(numero), `Error: El número ${numero} no es par`)

// 8. Utiliza count

    for (let i = 0; i < 10; i++) {
        console.count("CONTANDO")
    }

// 9. Utiliza trace

    function funcA() {
        funcB()
    }
    function funcB() {
        console.trace("Seguimiento de la ejecucion")
    }

    funcA()

// 10. Utiliza clear

    console.clear()
