import React from "react";
import { StyleSheet } from 'react-native'

import DeviceScreen from "./DeviceScreen";

const LightScreen = props => {
    return (
        <DeviceScreen
            activeStateText='On'
            inactiveStateText='Off'
            deviceImage={require('../assets/images/Light.png')}
            backgroundImage={require('../assets/images/Background1.png')}
            // headerText='LIGHT'
            numOfButtonsCard='2'
            cardButton0Title='On'
            cardButton1Title='Off'
        />
    )
}

const styles = StyleSheet.create({

})

export default LightScreen