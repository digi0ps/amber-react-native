import React from 'react'
import { View } from 'native-base'
import MapView from 'react-native-maps'

import styles from './MapTrackStyles.js'

export const MapTrack = ({ driverLocation, selectedLocation, carMarker }) => {
    console.log(driverLocation, selectedLocation)
    return (
        <View style={styles.container}>
            <MapView
                provider={MapView.PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={selectedLocation}
                region={selectedLocation}
            >
                {selectedLocation && (
                    <MapView.Marker
                        coordinate={{
                            latitude: selectedLocation.latitude,
                            longitude: selectedLocation.longitude,
                        }}
                        pinColor="green"
                    />
                )}
                {driverLocation && (
                    <MapView.Marker
                        coordinate={{
                            latitude: driverLocation.latitude,
                            longitude: driverLocation.longitude,
                        }}
                        image={carMarker}
                    />
                )}
            </MapView>
        </View>
    )
}

export default MapTrack
