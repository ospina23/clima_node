const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad a obtener clima',
        demand: true
    }
}).argv;


const getInfo = async (direccion) =>{

    try {
        const lug = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(lug.lat, lug.lng)
    return `El clima de ${argv.direccion} es de ${temp.wclima}`
    } catch (e) {
        return `El clima de ${argv.direccion} no se pudo recuperar`
    }
    

    
}

    getInfo(argv.direccion)
    .then(console.log);





