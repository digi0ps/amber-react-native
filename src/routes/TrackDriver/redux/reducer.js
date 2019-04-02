import { createReducer } from 'redux-act'
import * as actions from './actions'

const defaultState = {
    booking: {
        _id: '5ca3b1a784eab60017cccd63',
        pickupLocation: {
            latitude: 13.094587602520203,
            longitude: 80.20834922790527,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.051862500000000006,
        },
        assignedDriver: '5c9f805dfb6fc0465d4f3923',
        user: '__default__',
        ambulanceType: 'mini',
    },
    driver: null,
    showDriverFound: true,
    distanceFromUser: null,
}

const reducer = createReducer({}, defaultState)

reducer.on(actions.setBooking, (state, payload) => ({
    ...state,
    booking: payload,
}))

reducer.on(actions.setShowDriverFound, (state, payload) => ({
    ...state,
    showDriverFound: payload,
}))

reducer.on(actions.setDistanceFromUser, (state, payload) => ({
    ...state,
    distanceFromUser: payload,
}))

reducer.on(actions.setDriver, (state, payload) => ({
    ...state,
    driver: payload,
}))

export default reducer
