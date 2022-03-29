import React from "react";
import { ImageBackground, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSelector } from "react-redux";

import DeviceScreen from "./DeviceScreen";
import { selectDevicesInfoByType } from "../store/selectors/selectDevicesInfoByRoomId";

const FanScreen = props => {
    const roomId = props.navigation.getParam('roomId')
    const activeFan = <MaterialCommunityIcons name="fan" size={25} color="white" />
    const inactiveFan = <MaterialCommunityIcons name="fan-off" size={25} color="white" />

    const sensorsInfo = useSelector(selectDevicesInfoByType(roomId, 'temp sensor'))
    const sensorInfo = sensorsInfo[0]

    return (
        <ImageBackground
            source={require('../assets/images/Background5.png')}
            resizeMode="cover"
            style={styles.backgroundImage}
            blurRadius={1}
        >
            <DeviceScreen  
                roomId={roomId}
                deviceType='fan'
                deviceImage={require('../assets/images/Fan.png')}
                numOfButtons='2'
                activeStateText={activeFan}
                inactiveStateText={inactiveFan}
                informationCard={true}
                infoTitle='Temperature'
                infoValue={sensorInfo.payload.value}
                infoUnit={sensorInfo.payload.unit}
            />
        </ImageBackground>
    )
}

FanScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Fan(s)'
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
})

export default FanScreen