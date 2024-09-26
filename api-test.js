// import fetch from "node-fetch"

const claveApi = "a198f16739a34a759df122314242609";
const idioma ="es";
const ciudad = "Huancayo";


const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

let response = await fetch(apiClimaActual);
 let data = await response.json();  

//  console.log(data);

console.log(data.current.condition);



