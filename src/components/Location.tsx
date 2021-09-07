import React from 'react'

type LocationState = {
    latitude: number,
    longitude: number
}

class Location extends React.Component<{}, LocationState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0
        }

        this.getLocation=this.getLocation.bind(this)
    }
    
    getLocation (): void {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
        })
        console.log(this.state.latitude, this.state.longitude)
        }
   

    displayError() {

    }

    componentDidMount() {
        this.getLocation()
    }

    render(){
        return(
            <>
                <h3>Latitude:  { this.state.latitude } Longitude: { this.state.longitude }</h3>
            </>
        )
    }

}

export default Location