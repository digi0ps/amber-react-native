import { combineReducers } from 'redux'
import { reducer as home } from '../routes/Home/redux'
import { reducer as trackDriver } from '../routes/TrackDriver/redux'

export const makeRootReducer = () => {
    return combineReducers({
        home,
        trackDriver,
    })
}

export default makeRootReducer
