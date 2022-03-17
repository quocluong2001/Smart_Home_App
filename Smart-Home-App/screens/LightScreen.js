import React from "react";
import { StyleSheet } from 'react-native'

import DeviceScreen from "./DeviceScreen";

const LightScreen = props => {
    const lightsInfo = props.navigation.getParam('lightsInfo')
    const lightsData = lightsInfo.map(device => {
        return {
            deviceType: device.name,
            visibleState: 'Off',
            state: false,
        }
    })

    return (
        <DeviceScreen
            activeStateText='On'
            inactiveStateText='Off'
            deviceImage={require('../assets/images/Light.png')}
            backgroundImage={require('../assets/images/Background1.png')}
            numOfButtonsCard='2'
            cardButton0Title='On'
            cardButton1Title='Off'
            data={lightsData}
        />
    )
}

const styles = StyleSheet.create({

})

export default LightScreen