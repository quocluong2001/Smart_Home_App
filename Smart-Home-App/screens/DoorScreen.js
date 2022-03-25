import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

import DeviceScreen from "./DeviceScreen";

const DoorScreen = props => {
    const roomId = props.navigation.getParam('roomId')

    return (
        <ImageBackground
            source={require('../assets/images/Background2.png')}
            resizeMode="cover"
            style={styles.backgroundImage}
        >
            <DeviceScreen  
                roomId={roomId}
                deviceType='door'
                deviceImage={require('../assets/images/Door.png')}
                numOfButtons='1'
                activeStateText='Closed'
                inactiveStateText='Opened'
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

export default DoorScreen