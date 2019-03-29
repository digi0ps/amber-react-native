import React from 'react'
import { PermissionsAndroid } from 'react-native'

import createStore from './store/createStore'
import AppContainer from './AppContainer'
export default class Root extends React.Component {
    async componentDidMount() {
        const perm = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        )
        console.log(perm)
    }

    renderApp() {
        const initialState = window.___INTITIAL_STATE__
        const store = createStore(initialState)
        console.log('Hello')
        return <AppContainer store={store} />
    }

    render() {
        return this.renderApp()
    }
}
