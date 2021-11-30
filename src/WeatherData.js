import axios from 'axios'
import React, { Component } from 'react'

export default class WeatherData extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            info: "",
            coord: "",
            weather: [],
            main: "",
            wind: "",
            clouds: "",
            sys: "",
        }
    }

    getWeatherInfo = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=43a9c989cb59dcb32d5c4070f9540dc3`)
            .then(response => {
                console.log(response)
                this.setState({
                    info: response.data,
                    coord: response.data.coord,
                    weather: response.data.weather,
                    main: response.data.main,
                    wind: response.data.wind,
                    clouds: response.data.clouds,
                    sys: response.data.sys,
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getWeatherInfo()
    }

    // "http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=33ffc47849596b654a5183f5a28e3907"
    
    
    render() {
        const icon = `http://openweathermap.org/img/wn/${this.state.weather.icon}@2x.png`
        return (
            <div className="container">
                <h1 id="name">{this.state.info.name} , {this.state.sys.country}</h1>
                
                <div id="sunStatus">
                    <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="Sunrise"></img>
                    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Sunrise"></img>
                    <h5>{this.state.sys.sunrise}</h5>
                    <h5>{this.state.sys.sunset}</h5>
                </div>
                
                <div id="coord">
                    <h4>Longitude : {this.state.coord.lon}</h4>
                    <div id="weather_icon">
                    {this.state.weather.map(w => (
                        <>
                            <img src={`http://openweathermap.org/img/wn/${w.icon}@2x.png`} alt="weatherIcon"></img>
                            <h5>{w.main}</h5>
                        </>
                    ))}
                </div>
                    <h4>Latitude : {this.state.coord.lat}</h4>
                </div>
                
                <hr/>

                <div id="main">
                    <h4>Temperature</h4>
                    <h4>Feels like</h4>
                    <h4>Minimum Temperature</h4>
                    <h4>Maximum Temperature</h4>
                    <h4>Pressure</h4>
                    <h4>humidity</h4>
                    <h4>{this.state.main.temp}</h4>
                    <h4>{this.state.main.feels_like}</h4>
                    <h4>{this.state.main.temp_min}</h4>
                    <h4>{this.state.main.temp_max}</h4>
                    <h4>{this.state.main.pressure}</h4>
                    <h4>{this.state.main.humidity}</h4>
                </div>
            </div>
        )
    }
}

