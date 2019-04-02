import React from 'react'
import { Text, Image } from 'react-native'
import { View, Button } from 'native-base'

import styles from './DriverFoundStyles.js'

export const DriverFound = ({ driver, setShowDriverFound }) => {
    const { profilePic } = driver || ''
    const { vehicleNumber } = driver || ''
    return (
        <View style={styles.findDriverContainer}>
            <View style={styles.content}>
                <Text>YAY Driver Found!</Text>
                <Image
                    resizemode="contain"
                    style={styles.driverPic}
                    source={{ uri: profilePic }}
                />
                <View style={styles.driverInfo}>
                    <Text style={styles.quotationMarkLeft}>""</Text>
                    <View style={styles.driverBio}>
                        <Text style={styles.bioText}>Hi my name is</Text>
                        <Text style={styles.nameText}>{driver.name}</Text>
                        <Text style={styles.bioText}>and I am 0.2km away.</Text>
                    </View>
                    <Text style={styles.quotationMarkRight}>""</Text>
                </View>
                <View style={styles.vehicleDetails}>
                    <Text style={styles.vehicleText}>
                        Vehicle Plate number:
                    </Text>
                    <Text style={styles.vehicleNumber}> {vehicleNumber}</Text>
                    <Button
                        style={styles.nextBtn}
                        onPress={() => setShowDriverFound(false)}
                    >
                        <Text style={styles.nextBtnText}>Next</Text>
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default DriverFound
