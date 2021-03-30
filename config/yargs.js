const argv=require('yargs')
        .options({
            'e':{
                alias:'element',
                type:'number',
                demandOption:true,
                describe:'valor de element'
            },
            'l':{
                alias:'listar',
                type:'boolean',
                default:false,
                describe:'si desea mostrar por consola la salida'
            },
            'h':{
                alias:'hasta',
                type:'number',
                default: 10,
                describe: 'hasta donde se multiplica'
            }  
        })
        .check((argv,aptions)=>{
           if(isNaN(argv.e)){
               throw 'la base debe ser numero'
           }
           return true;
        })         
    .argv;



    module.exports=argv;