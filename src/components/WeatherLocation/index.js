import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather'; 
import {api_weather} from './../../constants/api_url';
import Location from './Location';
import WeatherData from './WeatherData'; 

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state= {
          city: 'BARCELONA',
          data: null,   
        };
        console.log("contructos");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate PRUEBA1");
    }
    

    handleUpdateClick = () =>{ 
        fetch(api_weather).then(resolve => {
            
            return resolve.json();
        }).then( data => {
            console.log("resultado del this.handleUpdateClick");
            const newWeather  = transformWeather(data);
            console.log(newWeather);
            //debugger;
            this.setState({
                data: newWeather  
            });
   
        });

    }
    render() {
        console.log("rennder");
        const{ city, data } = this.state;
        return (
            <div>
                <Location city={city}/>
                {  data ?              
                    <WeatherData data={data}/> :
                    <CircularProgress  size={50 }/>
                }
            </div> 
        );
    }
}

export default WeatherLocation;