
const location = "Buenos Aires, ar"
const api_key = "8d0b46916b1f126d58e085b72cdc3507";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;