import { createAction } from 'redux-act'
import { ENDPOINTS } from '../../Home/constants'
export const setBooking = createAction('trackDriver/setBooking')
export const setShowDriverFound = createAction('trackDriver/setShowDriverFound')
export const setDistanceFromUser = createAction(
    'trackDriver/setDistanceFromUser',
)
export const setDriver = createAction('trackDriver/setDriverInfo')

const driverId = state => state.trackDriver.booking.assignedDriver

export const getDriverDetails = () => async (dispatch, getState) => {
    const id = driverId(getState())
    const response = await fetch(`${ENDPOINTS.driver}/${id}`)
    const driver = await response.json()
    console.log(driver)
    dispatch(setDriver(driver))
}
