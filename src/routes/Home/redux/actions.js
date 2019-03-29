import { createAction } from 'redux-act'
import { DEFAULT_USER_LOCATION } from './reducer'

export const setStatus = createAction('home/setStatus')
export const setUserLocation = createAction('home/setUserLocation')
export const setSelectedLocation = createAction('home/setSelectedLocation')
export const setAmbulanceType = createAction('home/setAmbulanceType')
export const setNoNearbyDrivers = createAction('home/setNoNearbyDrivers')

const getGPSLocation = () =>
    new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => {
                resolve(position.coords)
            },
            error => console.log(error.message) && reject(error),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
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
