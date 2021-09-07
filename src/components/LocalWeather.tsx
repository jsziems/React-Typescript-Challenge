import React from 'react'

type LocalWeatherState = {
    latitude: number
    longitude: number
    temp: number
    feelsLike: number
}

class LocalWeather extends React.Component<{}, LocalWeatherState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            temp: 0,
            feelsLike: 0
        }

        this.getLocation=this.getLocation.bind(this)
        this.fetchWeather=this.fetchWeather.bind(this)
    }

    async fetchWeather(): Promise<void> {
        let lat = this.state.latitude
        let long = this.state.longitude
        console.log('in fetchWeather ', long, lat)
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=d1ac9ec5571f67e905a0cd74ea2f0548`)
        let json = await res.json()
        this.setState({
            temp: Math.round(json.main.temp),
            feelsLike: Math.round(json.main.feels_like)
        
        })
        console.log(json)
    }
    
    getLocation (): void {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        })
    }

    componentDidMount() {
        this.getLocation()
    }

    render(){
        return(
            <>
                <h3>Geocordinates are Latitude:  { this.state.latitude } , Longitude: { this.state.longitude }</h3>
                <button onClick={this.fetchWeather}>Get Local Weather</button>
                <h3>{ `Current temperature is ${this.state.temp}\u00B0F`}</h3>
                <h3>{ `Feels like ${this.state.feelsLike}\u00B0F`}</h3>
            </>
        )
    }

}

export default LocalWeather