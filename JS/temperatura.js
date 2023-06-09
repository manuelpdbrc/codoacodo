const ciudadesYCoordenadas = [
    {
        "nombre": "Salta",
        "latitud": -24.80,
        "longitud": -65.42
    },
    {
        "nombre": "Posadas",
        "latitud": -27.38,
        "longitud": -55.92
    },
    {
        "nombre": "Santa Rosa",
        "latitud": -36.61,
        "longitud": -64.28
    },
    {
        "nombre": "Rawson",
        "latitud": -43.39,
        "longitud": -65.08
    },
    {
        "nombre": "Ushuaia",
        "latitud": -54.96,
        "longitud": -68.24
    }
]

const divTemperaturas = document.querySelector('#temperaturas')

ciudadesYCoordenadas.forEach(ciudad => {

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${ciudad.latitud}&longitude=${ciudad.longitud}&current_weather=true`

    fetch(url)
                .then(res=>res.json())
                .then(data=>{
                    let temp = data.current_weather.temperature
                    let prob
                    if (temp < 10) {
                        prob = "Muy alta"
                        probClass = "prob-muy-alta"
                    } else if (temp < 14) {
                        prob = "Alta"
                        probClass = "prob-alta"
                    } else if (temp < 18) {
                        prob = "Media"
                        probClass = "prob-media"
                    } else {
                        prob = "Baja"
                        probClass = "prob-baja"
                    }
                    divTemperaturas.innerHTML += `
                        <div class="ciudad">
                            <p>${ciudad.nombre}<p>
                            <p class="temp">${temp}º</p>
                            <p class="probab-texto">Probabilidad de guiso</p>
                            <p class="probab-guiso ${probClass}">${prob}</p>
                        </di>`
                    })

})