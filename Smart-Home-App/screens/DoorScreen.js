import React from "react";
import { StyleSheet } from 'react-native'

import DeviceScreen from "./DeviceScreen";

const DoorScreen = props => {
    const doorsInfo = props.navigation.getParam('doorsInfo')
    const doorsData = doorsInfo.map(device => {
        return {
            deviceType: device.name,
            visibleState: 'Closed',
            state: false,
        }
    })

    return (
        <DeviceScreen
            activeStateText='Opened'
            inactiveStateText='Closed'
            deviceImage={require('../assets/images/Door.png')}
            backgroundImage={require('../assets/images/Background2.png')}
            numOfButtonsCard='2'
            cardButton0Title='Open'
            cardButton1Title='Close'
            data={doorsData}
        />
    )
}

const styles = StyleSheet.create({

})

export default DoorScreen