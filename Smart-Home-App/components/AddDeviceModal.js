import React from "react";
import {
    View,
    StyleSheet,
    Modal,
} from 'react-native'
import { useSelector } from "react-redux";

import NormalButton from "./NormalButton";
import Colors from "../constants/Colors";
import BodyText from "./BodyText";
import { selectNonDisplayedDevicesInfoByType } from "../store/selectors/selectDevicesInfoByRoomId";
import AvailableDevicesList from "./AvailableDevicesList";

const AddDeviceModal = props => {
    const roomId = props.roomId
    const deviceType = props.deviceType
    const deviceList = useSelector(selectNonDisplayedDevicesInfoByType(roomId, deviceType))

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.container}>
                <BodyText style={{fontFamily: 'roboto-bold'}}>
                    Press on device you want to add
                </BodyText>
                <AvailableDevicesList
                    listData={deviceList}
                    roomId={roomId}
                />
                <NormalButton
                    buttonName='Cancel'
                    buttonStyle={styles.cancelButton}
                    buttonTextStyle={styles.buttonText}
                    onPress={props.onCancel}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 5,
    },

    cancelButton: {
        backgroundColor: Colors.buttonColor0,
        width: 180,
        height: 32,
        marginTop: 20,
    },

    buttonText: {
        color: Colors.fontColor1
    },
})

export default AddDeviceModal