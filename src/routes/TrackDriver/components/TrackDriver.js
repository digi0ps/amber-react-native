import React from 'react'
import { View, Text } from 'react-native'

import { Container } from 'native-base'
import HeaderComponent from '../../../components/HeaderComponent'
import MapTrack from './MapTrack'
import DriverFound from './DriverFound'
import DriverFooterProfile from './DriverFooterProfile'
import DriverOnTheWayFooter from './DriverOnTheWayFooter'
const carMarker = require('../../../assets/img/carMarker.png')
class TrackDriver extends React.Component {
    componentDidMount() {
        this.props.getDriverDetails()
    }
    // componentWillReceiveProps(nextProps) {
    //     if (
    //         this.props.driverLocation &&
    //         nextProps.driverLocation !== this.props.driverLocation
    //     ) {
    //         this.props.getDistanceFromDriver()
    //     }
    // }

    render() {
        console.log(this.props)
        return (
            <Container>
                <View style={{ flex: 1 }}>
                    <HeaderComponent />
                    {this.props.booking && this.props.driver && (
                        <MapTrack
                            selectedLocation={this.props.booking.pickupLocation}
                            driverLocation={this.props.driver.location}
                            showCarMaker={true}
                            carMarker={carMarker}
                        />
                    )}

                    {this.props.distanceFromDriver.rows && (
                        <DriverOnTheWayFooter
                            driverInfo={this.props.driverInfo}
                            distanceFromDriver={this.props.distanceFromDriver}
                        />
                    )}

                    {this.props.driver && (
                        <DriverFooterProfile driverInfo={this.props.driver} />
                    )}

                    {this.props.showDriverFound && this.props.driver && (
                        <DriverFound
                            driver={this.props.driver}
                            setShowDriverFound={this.props.setShowDriverFound}
                        />
                    )}
                </View>
            </Container>
        )
    }
}

export default TrackDriver
