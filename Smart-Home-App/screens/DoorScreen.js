import React from "react";
import { StyleSheet } from 'react-native'

import DeviceScreen from "./DeviceScreen";

const DoorScreen = props => {
    return (
        <DeviceScreen
            activeStateText='Opened'
            inactiveStateText='Closed'
            deviceImage={require('../assets/images/Door.png')}
            backgroundImage={require('../assets/images/Background2.png')}
            headerText='DOOR'
            numOfButtonsCard='2'
            cardButton0Title='Open'
            cardButton1Title='Close'
        />
    )
}

const styles = StyleSheet.create({

})

export default DoorScreen