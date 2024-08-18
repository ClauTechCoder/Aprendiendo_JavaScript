// 1. Captura una excepción utilizando try-catch

class Person{
    constructor(name){
        this.name = name
    }
    helloPerson(){
        console.log("HOLA " + this.name + " BIENVENID@!!!")
    }
}

let myPerson = new Person("jimmy")

try{
    myPerson.tellMeName()
}catch(error){
    console.log("Error: " + error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try{
    myPerson.tellMeName()
}catch(error){
    console.log("Error: " + error.message)
}finally{
    console.log("DE TODAS MANERAS HOLA PERSONA")
}

// 3. Lanza una excepción genérica

// throw new Error("HOLA SOY UN ERROR GENERICO")

// 4. Crea una excepción personalizada

class myException extends Error{
    constructor(message,name){
        super(message)
        this.name = name
    }
}

// 5. Lanza una excepción personalizada
class Person2{
    constructor(name){
        this.name = name
    }
    helloPerson(){
        console.log("HOLA " + this.name + " BIENVENID@!!!")
    }
    notJohn(){
        if(this.name == "John"){
            throw new Error(this.name + " TU NOMBRE ESTA PROHIBIDO, FUERA!!!")
        }else{
            this.helloPerson()
        }
    }
}
try{
    let myPerson2 = new Person2("John")
    myPerson2.notJohn()
}catch(error){
    console.log(error.message)
}

// 6. Lanza varias excepciones según una lógica definida

function mySumVariables(a,b) {
    if(a ==="john" || b === "john"){
        throw new Error( " JOHN TU NOMBRE ESTA PROHIBIDO, FUERA!!!")
    }
    if(typeof a !== "number"){
        throw new Error("ERROR EN LA PRIMERA VARIABLE")
    }
    if(typeof b !== "number"){
        throw new Error("ERROR EN LA SEGUNDA VARIABLE")
    }
    return a + b;
}
try{
    console.log(mySumVariables(2,2))
}catch(error){
    if(error instanceof TypeError){
        console.log("EL ERROR QUE SE HA PRODUCIDO ES DE TIPO -> " + error.message)
    } else if(error instanceof Error){+
        console.log("EL ERROR QUE SE HA PRODUCIDO ES DE TIPO -> " + error.message)
    }
}

// 7. Captura varias excepciones en un mismo try-catch
    
    // HECHO YA ARRIBA

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let valores = ["123.45", "abc", "456.78", "def", "789.01", null, undefined, "NaN"];

valores.forEach((valor, index) => {
    try {
        let floatValue = parseFloat(valor);

        if (isNaN(floatValue)) {
            throw new Error(`El valor "${valor}" no se puede convertir a float`);
        }

        console.log(`El valor en el índice ${index} se ha convertido a float: ${floatValue}`);
    } catch (error) {
        console.error(`Error en el índice ${index}: ${error.message}`);
    }
});
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class PropertyNotFoundException extends Error {
    constructor(property) {
        super(`La propiedad "${property}" no se encontró en el objeto.`);
        this.name = "PropertyNotFoundException";
    }
}
function verificarPropiedad(objeto, propiedad) {
    if (!objeto.hasOwnProperty(propiedad)) {
        throw new PropertyNotFoundException(propiedad);
    }
    console.log(`El objeto tiene la propiedad "${propiedad}".`);
}
let miObjeto = {nombre: "paco",tipo: "persona"};

try {
    verificarPropiedad(miObjeto, "nombre");
    verificarPropiedad(miObjeto, "edad"); 
} catch (error) {
    if (error instanceof PropertyNotFoundException) {
        console.error(error.message);
    } else {
        console.error("Error inesperado:", error);
    }
}


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function reintentar(fn, maxReintentos = 10) {
    let intentos = 0;
    while (intentos < maxReintentos) {
        try {
            return fn(); // Intentamos ejecutar la función y retornar el resultado si tiene éxito
        } catch (error) {
            intentos++;
            console.error(`Intento ${intentos} fallido: ${error.message}`);
        }
    }

    throw new Error(`Error: se alcanzó el máximo de ${maxReintentos} reintentos`);
}
function funcionQuePuedeFallar() {
    if (Math.random() > 0.7) {
        return "¡Éxito!";
    } else {
        throw new Error("Error aleatorio");
    }
}
try {
    const resultado = reintentar(funcionQuePuedeFallar);
    console.log(resultado);
} catch (error) {
    console.error("Error final:", error.message);
}

