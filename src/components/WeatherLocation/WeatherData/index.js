import React from 'react';
import PropTypes from 'prop-types'
import WeatherTemperture from './WeatherTemperture';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css'; 

const WeatherData = ({data: {temperture, weatherState, humidity, wind}}) => (

    <div className="weatherDataCont">
       <WeatherTemperture temperture={temperture} 
           weatherState={weatherState}
       />
       <WeatherExtraInfo humidity= {humidity} wind={wind }/>

    </div>
    

);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperture: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        //humidity: PropTypes.number.isRequired,  
        wind: PropTypes.string.isRequired,
        }
    )
};
export default WeatherData;