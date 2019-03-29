import React from 'react'
import { Text } from 'react-native'
import { Footer, FooterTab, Button } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './FooterComponentStyles'

export const FooterComponent = ({ ambulanceType, setAmbulanceType }) => {
    //tab bar items
    const tabs = [
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

    return (
        <Footer>
            <FooterTab style={styles.footerContainer}>
                {tabs.map((obj, index) => {
                    return (
                        <Button key={index}>
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
                            <Text style={styles.subText}>{obj.subTitle}</Text>
                        </Button>
                    )
                })}
            </FooterTab>
        </Footer>
    )
}

export default FooterComponent
