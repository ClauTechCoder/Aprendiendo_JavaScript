// IMPORTAR MODULOS EXTERNOS QUE NO SON MIOS
 
const os = require("os") // acceder al modulo que quiero, tengo que saber su nombre (os)

console.log(os.platform()) // te da el core de tu sistema operativo en mi caso win32
console.log(os.arch()) // te da la arquitectura de tu SO
console.log(os.totalmem()) // te da la memoria total de tu SO
console.log(os.freemem()) // te da la memoria libre de tu SO