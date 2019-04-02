import React from 'react'
import { View, Text, ToastAndroid } from 'react-native'
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
        setInterval(async () => await this.props.fetchNearbyDrivers(), 3000)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!nextProps.noNearbyDrivers && this.props.noNearbyDrivers) {
            ToastAndroid.show('No nearby drivers found yet.', 3000)
            return true
        }
        if (this.props.status === 'confirmed') {
            Actions.trackDriver({ type: 'reset' })
            return true
        }
        return true
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

                        <Fab onPressAction={this.props.bookAmbulance} />
                        <FooterComponent
                            ambulanceType={this.props.ambulanceType}
                            setAmbulanceType={this.props.setAmbulanceType}
                        />
                    </View>
                )) || <FindDriver />}
            </Container>
        )
    }
}

export default Home
