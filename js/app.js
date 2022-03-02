const API_KEY = `703009c884855ab9713697b24a29a522`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    document.getElementById('city-name').value = '';
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
};

const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    console.log(temperature);
};