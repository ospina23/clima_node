const axios = require('axios');



const getLugarLatLng = async(dir) =>{
    const encodeUlr = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: {'x-rapidapi-key': 'cf882c8443msh43ccf069310b758p1bbd21jsncd0c7b2d208d'}
      });
    
      const resp = await instance.get()
    
      if (resp.data.Results.length ===0)
      {
          throw new Error(`No hay resultados para ${direccion}`)
      }

      const data = resp.data.Results[0];
      const direccion = data.name;
      const lat = data.lat;
      const lng = data.lon;

return {
direccion, lat, lng

}

}

module.exports=
{

    getLugarLatLng
}