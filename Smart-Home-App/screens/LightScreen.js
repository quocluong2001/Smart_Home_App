import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

import DeviceScreen from "./DeviceScreen";

const LightScreen = props => {
    const roomId = props.navigation.getParam('roomId')

    return (
        <ImageBackground
            source={require('../assets/images/Background1.png')}
            resizeMode="cover"
            style={styles.backgroundImage}
        >
            <DeviceScreen  
                roomId={roomId}
                deviceType='light'
                deviceImage={require('../assets/images/Light.png')}
                numOfButtons='1'
                activeStateText='On'
                inactiveStateText='Off'
            />
        </ImageBackground>
    )
}

LightScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Light(s)'
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
})

export default LightScreen