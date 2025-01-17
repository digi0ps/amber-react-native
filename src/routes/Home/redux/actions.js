import { createAction } from 'redux-act'
import { DEFAULT_USER_LOCATION } from './reducer'
import { ENDPOINTS, ENDP } from '../constants'

export const setStatus = createAction('home/setStatus')
export const setUserLocation = createAction('home/setUserLocation')
export const setSelectedLocation = createAction('home/setSelectedLocation')
export const setAmbulanceType = createAction('home/setAmbulanceType')
export const setNearbyDrivers = createAction('home/setNearbyDrivers')
export const setNoNearbyDrivers = createAction('home/setNoNearbyDrivers')

import * as trackerActs from '../../TrackDriver/redux/actions'

import { Actions } from 'react-native-router-flux';

const getGPSLocation = () =>
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => {
                resolve(position.coords)
            },
            error => console.log(error.message) && reject(error),
            { enableHighAccuracy: false, timeout: 5000, maximumAge: 10000 },
        )
    })

export const handleGPSLocation = () => async (dispatch, getState) => {
    // Fetch and set GPS location
    let location = await getGPSLocation()
    if (!location.latitude) {
        location = DEFAULT_USER_LOCATION
    }
    dispatch(setUserLocation(location))

    // If selectedLocation (the user pin is not null), set it to the gps's location
    const state = getState()
    const selectedLocation = state.home.selectedLocation

    if (!selectedLocation) {
        dispatch(setSelectedLocation(location))
    }
}

export const fetchNearbyDrivers = () => async (dispatch, getState) => {
    const selectedLocation = getState().home.selectedLocation
    const data = {
        ...selectedLocation,
    }
    //console.log(data)

try{
    fetch(ENDP.driver, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then(res => res.json())
    .then(nearByDrivers => {
      const data=JSON.parse(nearByDrivers.result)["data"]["driver"]
      dispatch(setNearbyDrivers(data))
    })
    //console.log(data)
    //console.log(request.json())
     //const nearbyDrivers = await request.json()
     // console.log(nearbyDrivers.result)
    // dispatch(setNearbyDrivers(nearbyDrivers))
  }
  catch(e) {
    console.log(e)
  }
}

const findDistance = (
    { latitude: x1, longitude: y1 },
    { latitude: x2, longitude: y2 },
) => Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))

export const bookAmbulance = () => async (dispatch, getState) => {

    // const { selectedLocation, ambulanceType, nearbyDrivers } = getState().home
    // if (!nearbyDrivers.length) {
    //     dispatch(setNoNearbyDrivers(true))
    //     return
    // } else {
    //     dispatch(setNoNearbyDrivers(false))
    // }
    //
    // // Find distance
    // const distance_arr = nearbyDrivers.map(driver => ({
    //     driver,
    //     distance: findDistance(selectedLocation, driver.location),
    // }))
    // distance_arr.sort((x, y) => x > y)
    // const nearestDriver = distance_arr[0].driver
    //
    // const bookingInfo = {
    //     pickupLocation: selectedLocation,
    //     assignedDriver: nearestDriver,
    //     user: '__default__',
    //     ambulanceType,
    // }
    // dispatch(setStatus('pending'))
    //
    // // Put out request
    // const response = await fetch(ENDPOINTS.bookings, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(bookingInfo),
    // })
    // const booking = await response.json()
    // console.log(booking)
    // dispatch(trackerActs.setBooking(booking))
    // dispatch(setStatus('confirmed'))
}
