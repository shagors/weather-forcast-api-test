const API_KEY = `703009c884855ab9713697b24a29a522`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    console.log(url);
};