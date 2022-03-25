import React from "react";
import { ImageBackground, StyleSheet } from 'react-native'

import DeviceScreen from "./DeviceScreen";

const FanScreen = props => {
    const roomId = props.navigation.getParam('roomId')

    return (
        <ImageBackground
            source={require('../assets/images/Background5.png')}
            resizeMode="cover"
            style={styles.backgroundImage}
        >
            <DeviceScreen  
                roomId={roomId}
                deviceType='fan'
                deviceImage={require('../assets/images/Fan.png')}
                numOfButtons='2'
                activeStateText='On'
                inactiveStateText='Off'
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
})

export default FanScreen