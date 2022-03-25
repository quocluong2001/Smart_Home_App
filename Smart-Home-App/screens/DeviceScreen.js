import { React, useState } from "react";
import {
    View,
    StyleSheet,
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import Colors from "../constants/Colors";
// import NormalButton from "../components/NormalButton";
// import useForceUpdate from "../custom_hooks/useForceUpdate";
// import AddNewDeviceModal from "../components/AddNewDeviceModal";
// import RemoveDeviceModal from "../components/RemoveDeviceModal";
import BodyText from "../components/BodyText";
import DeviceList from "../components/DeviceList";
import { selectDevicesInfoByType } from "../store/selectors/selectDevicesInfoByRoomId";

const DeviceScreen = props => {
    // const [isAddMode, setIsAddMode] = useState(false)
    // const [isRemoveMode, setIsRemoveMode] = useState(false)

    const roomId = props.roomId
    const devicesInfo = useSelector(selectDevicesInfoByType(roomId, props.deviceType))

    // const openAddModeHandler = () => {
    //     setIsAddMode(true)
    // }

    // const openRemoveModeHandler = () => {
    //     if (cards.length === 0) {
    //         Alert.alert(
    //             'There are no devices to remove',
    //             '',
    //             [{ text: 'OK', style: 'cancel' }]
    //         )
    //         return
    //     }

    //     setIsRemoveMode(true)
    // }

    // const addNewLightCardHandler = deviceInform => {
    //     if (deviceInform === '') {
    //         Alert.alert(
    //             'Invalid device\'s name',
    //             'Please enter device\'s name',
    //             [{ text: 'OK', style: 'cancel' }]
    //         )
    //         return
    //     }

    //     for (const deviceCard of cards) {
    //         if (deviceCard.deviceType === deviceInform) {
    //             Alert.alert(
    //                 'Duplicated device',
    //                 'This device had already been installed',
    //                 [{ text: 'OK', style: 'cancel' }]
    //             )
    //             return
    //         }
    //     }

    //     setCards([
    //         ...cards,
    //         {
    //             deviceType: deviceInform,
    //             visibleState: inactiveStateText,
    //             state: false
    //         }]
    //     )
    //     setIsAddMode(false)
    // }

    // const removeDeviceHandler = deviceName => {
    //     setCards(cards.filter(deviceInform => deviceInform.deviceType != deviceName))
    // }

    // const removeAllDeviceHandler = () => {
    //     setCards([])
    // }

    // const cancelAddNewLightCardHandler = () => {
    //     setIsAddMode(false)
    // }

    // const cancelRemoveDeviceModalHandler = () => {
    //     setIsRemoveMode(false)
    // }

    let informationCard

    if (props.informationCard) {
        informationCard = (
            <View style={styles.informationCard}>
                <BodyText style={styles.informationTitleStyle}>
                    {props.informationTitle}
                </BodyText>
                <BodyText style={styles.informationTextStyle}>
                    <BodyText
                        style={{ color: Colors.fontColor5 }}
                    >
                        {props.informationValue}
                    </BodyText> {props.informationUnit}
                </BodyText>
            </View>
        )
    }

    return (
        <View style={styles.screen}>
            {informationCard}
            <DeviceList
                roomId={roomId}
                listData={devicesInfo}
                numOfButtons={props.numOfButtons}
                deviceImage={props.deviceImage}
                activeStateText={props.activeStateText}
                inactiveStateText={props.inactiveStateText}
            />
            {/* <View style={styles.buttonContainer}>
                <NormalButton
                    buttonStyle={styles.manageDeviceCardButton}
                    buttonTextStyle={styles.manageDeviceCardButtonText}
                    buttonName='Add'
                    onPress={openAddModeHandler}
                />
                <NormalButton
                    buttonStyle={styles.manageDeviceCardButton}
                    buttonTextStyle={styles.manageDeviceCardButtonText}
                    buttonName='Remove'
                    onPress={openRemoveModeHandler}
                />
                <NormalButton
                    buttonStyle={styles.manageDeviceCardButton}
                    buttonTextStyle={styles.manageDeviceCardButtonText}
                    buttonName='Remove all'
                    onPress={removeAllDeviceHandler}
                />
            </View> */}
            {/* <AddNewDeviceModal
                visible={isAddMode}
                onConfirm={addNewLightCardHandler}
                onCancel={cancelAddNewLightCardHandler}
            />
            <RemoveDeviceModal
                visible={isRemoveMode}
                deviceList={cards}
                onRemove={removeDeviceHandler}
                onRemoveAll={removeAllDeviceHandler}
                onCancel={cancelRemoveDeviceModalHandler}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },

    button: {
        backgroundColor: Colors.buttonColor3,
    },

    buttonText: {
        color: Colors.fontColor1
    },

    // buttonContainer: {
    //     flexDirection: "row",
    //     width: '65%',
    //     justifyContent: "space-between"

    // },

    // manageDeviceCardButton: {
    //     height: 70,
    //     width: 70,
    //     backgroundColor: Colors.backgroundColor1,
    //     marginBottom: 10,
    //     padding: 0,
    // },

    // manageDeviceCardButtonText: {
    //     color: Colors.fontColor1
    // },

    informationCard: {
        backgroundColor: Colors.backgroundColor1,
        marginVertical: 10,
        width: 180,
        height: 87,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 24,
        padding: 15
    },

    informationTitleStyle: {
        fontFamily: 'roboto-bold',
        fontSize: 20,
        color: Colors.fontColor1
    },

    informationTextStyle: {
        color: Colors.fontColor1
    }
})

export default DeviceScreen