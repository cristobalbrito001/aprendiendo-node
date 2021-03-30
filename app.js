
const{ crearArchivo }= require('./helpers/multiplicar') 
const colors = require('colors');
const argv  = require('./config/yargs');
console.clear();
//const element = 7;





//const [,,arg3='element=5']= process.argv;
//const [,element=5]= arg3.split('=')




crearArchivo(argv.e,argv.l,argv.h)
 .then(nombreArchivo=> console.log(nombreArchivo.rainbow,'creado'.green))
 .catch(err=>console.log(err.error))


