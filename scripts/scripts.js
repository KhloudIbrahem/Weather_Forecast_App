let result = document.getElementById("res");
let searchbutton = document.getElementById("search_button");
let city = document.getElementById("city");

let getWeather = () => {
    let cityval = city.value;
    if(cityval.length == 0){
        result.innerHTML ='<h3 class="mg">Please enter the city</h3>';
    }
    else{
        let _URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=${key}&units=metric`;
        cityval.value = "";
        fetch(_URL).then((resp) => resp.json()).then((data) => {
            console.log(data);
            console.log(data.weather[0].icon);
            console.log(data.weather[0].main);
            console.log(data.weather[0].description);
            console.log(data.name);
            console.log(data.main.temp_min);
            console.log(data.main.temp_max);
            result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class="Weather">${data.weather[0].main}</h4>
            <h4 class="Description">${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp} &#176;</h1>
            <div class="temp">
               <div>
                  <h4 class="bartitle">Minimium</h4>
                  <h4 class="temperature">${data.main.temp_min}</h4>
               </div>
               <div>
                  <h4 class="bartitle">Maxmium</h4>
                  <h4 class="temperature">${data.main.temp_max}</h4>
               </div>
            </div>
            `;
        })
        .catch(()=>{
            result.innerHTML = '<h3 class="mg">City not found</h3>';
        })
    }
};
searchbutton.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
