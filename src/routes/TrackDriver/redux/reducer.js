import { createReducer } from 'redux-act'
import * as actions from './actions'

const defaultState = {
    booking: {},
    driver: null,
    showDriverFound: false,
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
