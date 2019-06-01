import React, { PureComponent } from 'react'
import { View } from 'native-base'
import MapView, { Marker } from 'react-native-maps'

import styles from './MapContainerStyles.js'

export default class MapContainer extends PureComponent {

    render() {
        const {
            userLocation,
            selectedLocation,
            setSelectedLocation,
            carMarker,
            nearByDrivers,
        } = this.props

        return (

            <View style={styles.container}>
                <MapView
                    provider={MapView.PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={userLocation}
                    region={userLocation}
                >
                    {userLocation && (
                        <Marker
                            draggable
                            /*onDragEnd={event =>
                                setSelectedLocation(
                                    event.nativeEvent.coordinate,
                                )
                            }*/
                            coordinate={{
                                latitude: userLocation.latitude,
                                longitude: userLocation.longitude,
                            }}
                            pinColor="green"
                        />
                    )}


                        {nearByDrivers.map((marker) =>
                        <Marker
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            pinColor="blue"
                            // image={carMarker}
                        />
                      )}
                    {/* <Marker coordinate={{
                        latitude: 12.93,//driver.location.latitude,
                        longitude: 77.65,//driver.location.longitude,
                    }}
                    pinColor="blue" /> */}
                </MapView>
            </View>
        )
    }
}
