import React from 'react'
import Location from './Location'

type LocalWeatherProps = {}
type LocalWeatherState = {
    latitude: number,
    longitude: number
}

class LocalWeather extends React.Component<LocalWeatherProps, LocalWeatherState> {
    constructor(props: LocalWeatherProps){
        super(props)
    }
    
    render(){
        return(
            <>
                <Location />
            </>
        )
    }
}

export default LocalWeather