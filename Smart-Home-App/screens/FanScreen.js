import React from "react";
import { StyleSheet } from 'react-native'

import DeviceScreen from "./DeviceScreen";

const FanScreen = props => {
    return (
        <DeviceScreen
            activeStateText='On'
            inactiveStateText='Off'
            deviceImage={require('../assets/images/Fan.png')}
            backgroundImage={require('../assets/images/Background5.png')}
            headerText='FAN'
            numOfButtonsCard='3'
            cardButton0Title='On'
            cardButton1Title='Off'
            cardButton2Title='Set Timer'
        />
    )
}

const styles = StyleSheet.create({

})

export default FanScreen