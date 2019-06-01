import React from 'react'
import { Actions, Scene } from 'react-native-router-flux'
import HomeContainer from './Home/HomeContainer'
import TrackDriverContainer from './TrackDriver/container/TrackDriverContainer'

const scenes = Actions.create(
    <Scene key="root" hideNavBar>
        <Scene key="home" component={HomeContainer} title="home" initial = {true}/>
        <Scene
            key="trackDriver"
            component={TrackDriverContainer}
            title="trackDriver"
        hideNavBar
        />
    </Scene>,
)

export default scenes
