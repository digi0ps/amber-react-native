import React from 'react'
import { View, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Container } from 'native-base'

import MapContainer from './MapContainer'
import HeaderComponent from '../../../components/HeaderComponent'
import FooterComponent from '../../../components/FooterComponent'

import Fab from './Fab'
import FindDriver from './FindDriver'
const taxiLogo = require('../../../assets/img/taxi_logo_white.png')
const carMarker = require('../../../assets/img/carMarker.png')

class Home extends React.Component {
    async componentDidMount() {
        await this.props.handleGPSLocation()
        await this.props.fetchNearbyDrivers()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.status === 'confirmed') {
            Actions.trackDriver({ type: 'reset' })
        }
    }

    render() {
        const { status } = this.props
        return (
            <Container>
                {(status !== 'pending' && (
                    <View style={{ flex: 1 }}>
                        <HeaderComponent logo={taxiLogo} />
                        <MapContainer
                            userLocation={this.props.userLocation}
                            selectedLocation={this.props.selectedLocation}
                            setSelectedLocation={this.props.setSelectedLocation}
                            carMarker={carMarker}
                            nearByDrivers={this.props.nearbyDrivers}
                        />

                        <Fab onPressAction={() => null} />
                        <FooterComponent
                            ambulanceType={this.props.ambulanceType}
                            setAmbulanceType={this.props.setAmbulanceType}
                        />
                    </View>
                )) || (
                    <FindDriver selectedAddress={this.props.selectedLocation} />
                )}
            </Container>
        )
    }
}

export default Home
