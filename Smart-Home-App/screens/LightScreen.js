import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";

import DeviceScreen from "./DeviceScreen";
import { selectDevicesInfoByType } from "../store/selectors/selectDevicesInfoByRoomId";

const LightScreen = props => {
    const roomId = props.navigation.getParam('roomId')
    const activeLight = <MaterialCommunityIcons name="lightbulb-outline" size={25} color="white" />
    const inactiveLight = <MaterialCommunityIcons name="lightbulb-off-outline" size={25} color="white" />

    const sensorsInfo = useSelector(selectDevicesInfoByType(roomId, 'light sensor'))
    const sensorInfo = sensorsInfo[0]

    return (
        <ImageBackground
            source={{ uri: 'https://i.ibb.co/RQxxLY1/Background1.png' }}
            resizeMode="cover"
            style={styles.backgroundImage}
            blurRadius={1}
        >
            <DeviceScreen
                roomId={roomId}
                deviceType='light'
                deviceImage={{ uri: 'https://i.ibb.co/ncYFpgD/Light.png' }}
                numOfButtons='1'
                activeStateText={activeLight}
                inactiveStateText={inactiveLight}
                informationCard={true}
                infoTitle='Light intensity'
                infoValue={sensorInfo.payload.value}
                infoUnit={sensorInfo.payload.unit}
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
        height: '100%',
    },
})

export default LightScreen