import { connect } from 'react-redux'
import Home from '../components/Home'
import * as acts from '../redux/actions'

const mapStateToProps = state => ({
    status: state.home.status,
    userLocation: state.home.userLocation,
    selectedLocation: state.home.selectedLocation,
    ambulanceType: state.home.ambulanceType,
    noNearbyDrivers: state.home.noNearbyDrivers,
})

const mapActionCreators = dispatch => ({
    handleGPSLocation: () => dispatch(acts.handleGPSLocation()),
    setSelectedLocation: location =>
        dispatch(acts.setSelectedLocation(location)),
    setAmbulanceType: type => dispatch(acts.setAmbulanceType(type)),
    setNoNearbyDrivers: value => dispatch(acts.setNoNearbyDrivers(value)),
    bookAmbulance: () => dispatch(acts.bookAmbulance()),
})

export default connect(
    mapStateToProps,
    mapActionCreators,
)(Home)
