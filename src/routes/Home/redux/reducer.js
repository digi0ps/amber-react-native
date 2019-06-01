import { createReducer } from 'redux-act'
import { Dimensions } from 'react-native'
import * as actions from './actions'

export const DEFAULT_USER_LOCATION = {
    latitude: 12.93,
    longitude: 77.61,
}

const addDeltaToLocation = location => {
    const { width, height } = Dimensions.get('window')
    const ASPECT_RATIO = width / height
    const latitudeDelta = 0.0922
    const longitudeDelta = ASPECT_RATIO * latitudeDelta
    return {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta,
        longitudeDelta,
    }
}

const defaultState = {
    status: 'initial',
    nearbyDrivers: [],
    userLocation: addDeltaToLocation(DEFAULT_USER_LOCATION),
    selectedLocation: addDeltaToLocation({
      latitude: 12.92,
      longitude: 77.62,
    }),
    ambulanceType: 'mini',
    noNearbyDrivers: false,
}

const reducer = createReducer({}, defaultState)

reducer.on(actions.setStatus, (state, payload) => ({
    ...state,
    status: payload,
}))

reducer.on(actions.setNearbyDrivers, (state, payload) => {
  console.log(payload)
  return({
    ...state,
    nearbyDrivers: payload,
})})

reducer.on(actions.setUserLocation, (state, payload) => ({
    ...state,
    userLocation: addDeltaToLocation(payload),
}))

reducer.on(actions.setSelectedLocation, (state, payload) => ({
    ...state,
    selectedLocation: addDeltaToLocation(payload),
}))

reducer.on(actions.setAmbulanceType, (state, payload) => ({
    ...state,
    ambulanceType: payload,
}))

reducer.on(actions.setNoNearbyDrivers, (state, payload) => ({
    ...state,
    noNearbyDrivers: payload,
}))

export default reducer
