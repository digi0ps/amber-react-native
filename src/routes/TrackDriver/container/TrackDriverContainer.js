import { connect } from 'react-redux'
import TrackDriver from '../components/TrackDriver'
import * as acts from '../redux/actions'

const mapStateToProps = state => ({
    userLocation: state.home.userLocation,
    booking: state.trackDrive.booking,
    driver: state.trackDriver.driver || {},
    showDriverFound: state.trackDriver.showDriverFound,
    distanceFromDriver: state.trackDriver.distanceFromDriver || {},
})

const mapActionCreators = dispatch => ({
    getDriverDetails: () => dispatch(acts.getDriverDetails()),
})

export default connect(
    mapStateToProps,
    mapActionCreators,
)(TrackDriver)
