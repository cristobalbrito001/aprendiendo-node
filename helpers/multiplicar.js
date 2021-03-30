

const fs = require('fs');
const colors = require('colors');
/*

const crearArchivo =( element ) => {
    
  return new Promise( (resolve, rejects)=> {
    let salida = '';
    for (let i = 0; i <= 10; i++) {


        let a = element * i;

        salida += a + '\n';

    }
    console.log(salida);

    fs.writeFileSync(`tabla-${element}.txt`, salida)


    resolve(`tabla-${element}.txt`)
  })  
    
}
*/
    
const crearArchivo =async( element,listar,hasta ) => {
    
   try{
      let salida = '';
      for (let i = 0; i <= hasta; i++) {
  
  
          let a = element * i;
  
          salida += a + '\n';
  
      }
      
  
      fs.writeFileSync(`./salida/tabla-${element}.txt`, salida)
      
      
      if(listar){
        console.log(salida);
        
      }
      return(`tabla-${element}.txt`)

     
    }
    catch(err){
        throw err
    }
      
  }
  

module.exports={
    crearArchivo
        
    
}