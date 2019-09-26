import {
    SUNNY,
    RAIN,
} from './../constants/weather';


const getWeatherState = weather_data => {
    return SUNNY ;
}

const transformWeather  = weather_data =>{
   const { humidity, temp } = weather_data.main;
   const { speed } = weather_data.wind;
   //const weatherState = this.getweatherState(weather_data);

   const data = {
       humidity,
       temperture: temp,
       wind: `${speed} m/s`,
       weatherState: RAIN ,
   }

   return data;
}

export default transformWeather;