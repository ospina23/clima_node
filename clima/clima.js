const axios = require('axios');

const getClima = async (lat, lng) => {

    console.log(lat, lng);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5de7b8e338fc38651497450a173ac97c&units=metric`);
    if (resp.data.main.length === 0) {
        throw new Error(`No hay resultados del clima para las coordenadas ${lat} y ${lng}`)
    }
   
    const wclima = resp.data.main.temp;
    
    return {
        wclima
    }
}

module.exports = {
    getClima
}