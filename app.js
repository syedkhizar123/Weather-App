

let cityName = document.getElementById("city")

let weather = document.getElementById("weather")
let defaultcity = "Karachi"
const karachiurl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultcity}&appid=244006e372fb520e56e50b3032f7bcf1`


// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=244006e372fb520e56e50b3032f7bcf1
// `;

let citySearchUrl ;
function btn(){
    citySearchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=244006e372fb520e56e50b3032f7bcf1`
    Data()
    cityName.value = ""
}

async function Basic(){
    try {
        citySearchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultcity}&appid=244006e372fb520e56e50b3032f7bcf1`
        let wthr = await fetch(citySearchUrl)
        let data = await wthr.json() 
        if(data.weather[0].main === "Clouds"){
            weatherIcon = "clouds.png"
        } else if(data.weather[0].main === "Mist"){
            weatherIcon = "mist.png"
        } else if (data.weather[0].main === "Haze"){
            weatherIcon = "haze.png"
        } else if(data.weather[0].main === "Rain"){
            weatherIcon = "lightRain.png"
        } else if(data.weather[0].main === "Clear"){
            weatherIcon = "clearSky.png"
        } else if(data.weather[0].main === "Smoke"){
            weatherIcon = "smoke.png"
        }  else if(data.weather[0].main === "Snow"){
            weatherIcon = "snow.png"
        }
        weather.innerHTML = 
        
        `
        <div class="text-center">
        <img style="margin:0px auto;" src="${weatherIcon}" alt="" height="140px" width="150px"></div>
        <div class="text-center"><b class="text-center my-2 text-white" style="font-size:80px;"> ${Math.round(data.main.temp-273)}\u00B0 C</b></div>
        <h2 class="text-center my-2 text-white">${data.name}</h2>
        <h4 class="text-center my-4 text-white">Feels Like: ${Math.round(data.main.feels_like-273)}\u00B0 C</h4>
        <div class="extradata mt-2 mb-2  d-flex justify-content-evenly text-white">
            <div class="humid py-5 d-flex">  
                 <div class="d-flex align-items-center"><img src="./humid.png" alt="" height="30px" width="60px"></div>  
                 <div>  
                <h5>${Math.round(data.main.humidity)}%</h5>
                <b>Humidity</b>
                </div>
            </div>
            <div class="wind py-5 d-flex">
            <div class="d-flex align-items-center"><img class="mx-2 " src="./wind.png" height="30px" width="40px" alt=""></div>
            <div class="me-2">
                <h5>${Math.round(data.wind.speed)} km/h</h5>
                <b>Wind Speed</b>
            </div>
            </div>
        </div>
        
        `
            
    } catch (error) {
        console.log("This is the error: " + error)
    }
}
Basic()



let data ;
let weatherIcon ;
async function Data() {
    try{
        let wthr = await fetch(citySearchUrl)
        let data = await wthr.json()
        console.log(data)
        console.log(data.weather[0].main)
        if(data.weather[0].main === "Clouds"){
            weatherIcon = "clouds.png"
        } else if(data.weather[0].main === "Mist"){
            weatherIcon = "mist.png"
        } else if (data.weather[0].main === "Haze"){
            weatherIcon = "haze.png"
        } else if(data.weather[0].main === "Rain"){
            weatherIcon = "lightRain.png"
        } else if(data.weather[0].main === "Clear"){
            weatherIcon = "clearSky.png"
        } else if(data.weather[0].main === "Smoke"){
            weatherIcon = "smoke.png"
        }  else if(data.weather[0].main === "Snow"){
            weatherIcon = "snow.png"
        }
        weather.innerHTML = `
        <div class="text-center">
        <img style="margin:0px auto;" src="${weatherIcon}" alt="" height="140px" width="150px"></div>
        <div class="text-center"><b class="text-center mb-2 text-white" style= "font-size: 80px; margin:0px auto;"> ${Math.round(data.main.temp-273)}\u00B0 C</b></div>
<h2 class="text-center my-2 text-white">${data.name}</h2>
<h4 class="text-center mt-4 text-white">Feels Like: ${Math.round(data.main.feels_like-273)}\u00B0 C</h4>
  <div class="extradata mt-2 mb-2  d-flex justify-content-evenly text-white">
            <div class="humid py-5 d-flex">  
                 <div class="d-flex align-items-center"><img src="./humid.png" alt="" height="30px" width="50px"></div>  
                 <div>  
                <h5>${Math.round(data.main.humidity)}%</h5>
                <b>Humidity</b>
                </div>
            </div>
            <div class="wind py-5 d-flex">
            <div class="d-flex align-items-center"><img class="mx-2 " src="./wind.png" height="30px" width="50px" alt=""></div>
            <div class="me-2">
                <h5>${Math.round(data.wind.speed)} km/h</h5>
                <b>Wind Speed</b>
            </div>
            </div>
        </div>
`
    
    }
    catch (error) {
        console.log("This is the error: "+error)
    }
}


// weather.innerHTML(`Temp ${Math.round(data.main.temp-273)}' C</br>Feels Like ${Math.round(data.main.feels_like-273)}<br>Weather <i${data.weather[0].icon}>`)