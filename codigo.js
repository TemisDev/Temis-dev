const claveApi = "a198f16739a34a759df122314242609";
const idioma ="es";
// let inpCiudad = "Chupaca";
// console.log(inpCiudad);

async function obtenerClima(){
    // let get = document.getElementById("input-ciudad").value;
    // console.log(get);
    let ciudad = document.getElementById("input-ciudad").value;
    console.log(ciudad);

    if(!ciudad){
        alert("Ingrese una ciudad");
        return;
    }

    let apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;
    let response = await fetch(apiClimaActual);
    let data = await response.json();
    mostrarClima(data);
}

function mostrarClima(data){
    document.querySelector(".clima-icono").src = data.current.condition.icon;
    document.querySelector(".clima-texto").innerHTML = data.current.condition.text;
    document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
    document.querySelector(".ciudad").innerHTML = data.location.name;
    document.querySelector(".humedad").innerHTML = data.current.humidity + "%";
    document.querySelector(".viento").innerHTML = data.current.wind_kph+ "km/h";

};