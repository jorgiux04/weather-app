import React from 'react';
import WeatherIcons from 'react-weathericons'; 
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUNNY,
    RAIN,
    FOG,
    SNOW,
} from './../../../constants/weather';

const icons = {
    [SUNNY]: "day-sunny",
    [FOG]: "day-fog",
    [RAIN]: "rain",
    [CLOUD]: "cloud",
    [SNOW]:"snow",
};

const getWeatherIcon = WeatherState =>{
    const icon = icons[WeatherState];
    const sizeIcont = "4x";
    if(icon)
        return (<WeatherIcons className="wicon" name={icon} size={sizeIcont}></WeatherIcons>);
    else
    return (<WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcont}></WeatherIcons>);
}

const WeatherTemperture = ({temperture, WeatherState}) => (
    <div className="weatherTempertureCont">
        {
        getWeatherIcon(WeatherState)
        }
        <samp className="temperature">{` ${temperture}`}</samp>
        <samp className="temperatureType">{` Cº`}</samp>
    </div>

);

WeatherTemperture.propTypes = {
    //temperture: PropTypes.number.isRequired,
    //WeatherState: PropTypes.string.isRequired,
}

export default WeatherTemperture;