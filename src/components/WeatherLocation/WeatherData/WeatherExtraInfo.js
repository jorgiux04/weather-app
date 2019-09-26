import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <samp className="extraInfoText">{`Humedad: ${humidity}% `} </samp>
        <samp className="extraInfoText">{`Viento: ${wind}`}</samp>
    </div> 

);

WeatherExtraInfo.propTypes = {
    //humity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;