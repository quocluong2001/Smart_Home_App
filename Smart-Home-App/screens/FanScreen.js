import React, { useContext, useEffect } from "react";
import { ImageBackground, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSelector, useDispatch } from "react-redux";

import DeviceScreen from "./DeviceScreen";
import { selectDevicesInfoByType } from "../store/selectors/selectDevicesInfoByRoomId";
import { SocketContext } from "../utils/socket";
import { updateDevicesValueToStore } from "../store/actions/updateDevicesValueToStore";
import formatData from "../utils/formatData";

const FanScreen = props => {
    const roomId = props.navigation.getParam('roomId')
    const activeFan = <MaterialCommunityIcons name="fan" size={25} color="white" />
    const inactiveFan = <MaterialCommunityIcons name="fan-off" size={25} color="white" />

    const dispatch = useDispatch();

    const socket = useContext(SocketContext);

    useEffect(() => {
        // socket.on('newDevice', (device) => { });

        socket.on(
            'updateDevice',
            (ObjectId, description, updateData) => {
                const updatedValue = formatData(description, updateData)

                dispatch(updateDevicesValueToStore(roomId, ObjectId, updatedValue))
            });

        return () => {
            socket.close();
        };

    }, [socket]);

    const sensorsInfo = useSelector(selectDevicesInfoByType(roomId, 'temp sensor'))

    //! hard coded
    const sensorInfo = sensorsInfo[0]
    //! end hard coded

    return (
        <ImageBackground
            source={{ uri: 'https://i.ibb.co/kcnGVT2/Background5.jpg' }}
            resizeMode="cover"
            style={styles.backgroundImage}
            blurRadius={1}
        >
            <DeviceScreen
                roomId={roomId}
                deviceType='fan'
                deviceImage={{ uri: 'https://i.ibb.co/DMk2mw2/Fan.png' }}
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