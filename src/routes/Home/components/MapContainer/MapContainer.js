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
                    region={selectedLocation}
                >
                    {selectedLocation && (
                        <Marker
                            draggable
                            onDragEnd={event =>
                                setSelectedLocation(
                                    event.nativeEvent.coordinate,
                                )
                            }
                            coordinate={{
                                latitude: selectedLocation.latitude,
                                longitude: selectedLocation.longitude,
                            }}
                            pinColor="green"
                        />
                    )}

                    {nearByDrivers.map((driver, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: driver.location.latitude,
                                longitude: driver.location.longitude,
                            }}
                            image={carMarker}
                        />
                    ))}
                </MapView>
            </View>
        )
    }
}
