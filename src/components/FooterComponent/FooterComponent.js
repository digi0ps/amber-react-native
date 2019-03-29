import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Text, ToastAndroid } from 'react-native'
import { Footer, FooterTab, Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './FooterComponentStyles'

class FooterComponent extends PureComponent {
    static propTypes = {
        ambulanceType: PropTypes.string.isRequired,
        setAmbulanceType: PropTypes.func.isRequired,
    }

    tabs = [
        {
            title: 'Mini Van',
            subTitle: 'For smaller issues',
            icon: 'car',
            type: 'mini',
        },
        {
            title: 'Ambulance',
            subTitle: 'For major issues',
            icon: 'car',
            type: 'large',
        },
    ]

    render() {
        const { ambulanceType, setAmbulanceType } = this.props

        return (
            <Footer>
                <FooterTab style={styles.footerContainer}>
                    {this.tabs.map((obj, index) => {
                        return (
                            <Button
                                key={index}
                                onPress={() => {
                                    ToastAndroid.show(
                                        `Type is ${obj.type}`,
                                        1000,
                                    )
                                    setAmbulanceType(obj.type)
                                }}
                            >
                                <Icon
                                    size={20}
                                    name={obj.icon}
                                    color={
                                        ambulanceType === obj.type
                                            ? '#FF5E3A'
                                            : 'grey'
                                    }
                                />
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color:
                                            ambulanceType === obj.type
                                                ? '#FF5E3A'
                                                : 'grey',
                                    }}
                                >
                                    {obj.title}
                                </Text>
                                <Text style={styles.subText}>
                                    {obj.subTitle}
                                </Text>
                            </Button>
                        )
                    })}
                </FooterTab>
            </Footer>
        )
    }
}

export default FooterComponent
