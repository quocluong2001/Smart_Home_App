import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DeviceScreen from "./DeviceScreen";

const DoorScreen = props => {
    const roomId = props.navigation.getParam('roomId')
    const unlockedDoor = <MaterialCommunityIcons name="door-closed" size={27} color="white" />
    const lockedDoor = <MaterialCommunityIcons name="door-closed-lock" size={27} color="white" />

    return (
        <ImageBackground
            source={require('../assets/images/Background2.png')}
            resizeMode="cover"
            style={styles.backgroundImage}
            blurRadius={1}
        >
            <DeviceScreen  
                roomId={roomId}
                deviceType='door'
                deviceImage={require('../assets/images/Door.png')}
                numOfButtons='1'
                activeStateText={unlockedDoor}
                inactiveStateText={lockedDoor}
            />
        </ImageBackground>
    )
}

DoorScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Door(s)'
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
})

export default DoorScreen