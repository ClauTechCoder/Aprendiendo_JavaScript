
// como operar cuando mi programa ha tenido un error y no se por qué o un error de user. 
// Aprender a controlarlo y como gestionarlo.


// Objeto sin valor o queremos algo que "no existe", controlamos esa excepcion.

let myObject;

// TRY-CATCH sin capturar error
try{ // intenta ejecutar este codigo
    console.log(myObject.email)
    console.log("NO HA OCURRIDO UN ERROR")
}catch{ // si hay errror entro aqui
    console.log("HA OCURRIDO UN ERROR")
}

// TRY-CATCH capturando el error

try{ // intenta ejecutar este codigo
    console.log(myObject.email)
    console.log("NO HA OCURRIDO UN ERROR")
}catch(error){ // si hay errror entro aqui
    console.log("HA OCURRIDO UN ERROR " + error.message) // .message para que user lo entienda
}

// TRY-CATCH con finally. Independientemente si hay o no error entra en ese bloque de codigo. Sin catch no funciona

try{ // intenta ejecutar este codigo
    console.log(myObject.email)
    console.log("NO HA OCURRIDO UN ERROR")
}catch(error){ // si hay errror entro aqui
    console.log("HA OCURRIDO UN ERROR " + error.message)
} finally{
    console.log("ME EJECUTO HAYA ERROR O NO")
}

// Lanzamiento de excepciones si ocurre algo en un punto de mi programa
// Tenemos muchas excepciones: Error, TypeError,SyntaxError.....
// THROW

function sumIntegers(a,b){

    if(typeof a !== "number" || typeof b !== "number"){ //por si meto una cadena de texto u otra cosa
        console.log("SOLO DE ADMITEN NUMEROS")
    }
    if( !Number.isInteger(a) || !Number.isInteger(b) ){ // si no son numeros enteros actuo
        throw new Error("NO ES UN NUMERO ENTERO!!!") // lanzo yo el error manualmente
    }
    if (a == 0 || b == 0){
        throw new Error("SE INTENTA SUMAR 0",a,b); // para que lance mi excepcion personalizada
    }
        return a + b
    
}
try{
    console.log(sumIntegers(5,10))
    console.log(sumIntegers("q",10))

}catch(error){
    console.log(error.message)
}


// controlamos el posible escenario de tener varios errores.

try{
    console.log(sumIntegers(5,10))
    console.log(sumIntegers("q",10))
}catch(error){
    if(error instanceof TypeError){
        console.log("EL ERROR PERSONALIZADO QUE SE HA PRODUCIDO ES DE TIPO " + error.message)
    } else if(error instanceof Error){+
        console.log("EL ERROR PERSONALIZADO QUE SE HA PRODUCIDO ES DE TIPO " + error.message)
    }
    
}

// Creo mi propia excepcion/error.

class SumZeroIntegerError extends Error { // mi clase hereda de algun tipo de error existente
    constructor(message,a, b){
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers(){
        console.log(this.a + " + " + this.b)
    }

}
try{
    console.log(sumIntegers(5,0))

}catch(error){
    console.log(error.message)
    error.printNumbers()
}

