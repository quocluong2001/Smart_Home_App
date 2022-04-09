import React, { useState, useContext, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    Switch,
    Alert
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Loading from './Loading';
import BodyText from './BodyText';
import NormalButton from './NormalButton';
import Colors from '../constants/Colors';
import RemoveButton from './RemoveButton';
import { selectDeviceInfoByDeviceId } from '../store/selectors/selectDevicesInfoByRoomId';
import updateDevicesValue from '../store/thunk-functions/updateDevicesValue';
import { updateDevicesValueToStore } from '../store/actions/updateDevicesValueToStore'
import { removeDevice } from '../store/actions/removeDevice';
import { SocketContext } from '../utils/socket';
import formatData from '../utils/formatData';

const DeviceCardWithSetTimer = props => {

    //* For declaring state and variable ////
    const [isLoading, setIsLoading] = useState(true)
    const roomId = props.roomId
    const deviceId = props.deviceId
    const deviceInfo = useSelector(selectDeviceInfoByDeviceId(roomId, deviceId))
    const [switchValue, setSwitchValue] = useState(deviceInfo.payload.value)


    const dispatch = useDispatch() //* For dispatch action


    //* For switch's action ////
    const switchHandler = () => {
        dispatch(updateDevicesValue(roomId, deviceId))
        setSwitchValue(!deviceInfo.payload.value)
    }


    //* For undisplay device ////
    const removeDeviceHandler = () => {
        Alert.alert(
            'Confirm device\'s removal',
            'Are you sure about removing this device?',
            [
                {
                    text: 'Confirm',
                    onPress: () => dispatch(removeDevice(roomId, deviceId)),
                },
                {
                    text: 'Cancel',
                }
            ],
            {
                cancelable: true,
            }
        )
    }


    //* For socket ////
    const socket = useContext(SocketContext);

    useEffect(() => {
        // socket.on('newDevice', (device) => { });

        socket.on('updateDevice', (ObjectId, description, updateData) => {

            const updatedValue = formatData(description, updateData)

            dispatch(updateDevicesValueToStore(roomId, ObjectId, updatedValue))

            if (typeof updatedValue === "boolean") {
                setSwitchValue(updatedValue)
            }

        });

        return () => {
            socket.close();
        };
    }, [socket]);


    //* For display device status ////
    let visibleState
    
    if (deviceInfo.payload.value === true) {
        visibleState = props.activeStateText
    }
    else {
        visibleState = props.inactiveStateText
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ ...styles.container, ...props.style }}>
                <View style={styles.header}>
                    <View style={styles.headerLeft} />
                    <View style={styles.textContainer}>
                        <BodyText style={styles.deviceNameText}>
                            {props.deviceName}
                        </BodyText>
                    </View>
                    <View style={styles.headerRight}>
                        <RemoveButton
                            buttonColor='red'
                            onRemove={removeDeviceHandler}
                        />
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.imageStateContainer}>
                        <View style={styles.imageContainer}>
                            <Loading
                                visible={isLoading}
                            />
                            <Image
                                source={props.source}
                                resizeMode='contain'
                                style={styles.image}
                                onLoadStart={() => setIsLoading(true)}
                                onLoadEnd={() => setIsLoading(false)}
                            />
                        </View>
                        <View style={styles.stateContainer}>
                            <BodyText style={styles.state}>
                                {visibleState}
                            </BodyText>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Switch
                            style={styles.switch}
                            value={switchValue}
                            onValueChange={switchHandler}
                        />
                        <NormalButton
                            buttonStyle={styles.button}
                            buttonTextStyle={styles.buttonText}
                            buttonName={props.buttonName}
                            onPress={props.onPressButton}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 190,
        backgroundColor: Colors.backgroundColor1,
        borderRadius: 24,
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerLeft: {
        width: '20%'
    },

    textContainer: {
        width: '60%',
    },

    headerRight: {
        width: '20%',
        alignItems: 'flex-end',
        paddingRight: 10,
    },

    deviceNameText: {
        fontFamily: 'roboto-bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },

    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    imageStateContainer: {
        alignItems: 'center',
    },

    imageContainer: {
        width: 100,
        height: 100,
    },

    image: {
        width: '100%',
        height: '100%',
        transform: [{ rotateX: '15deg' }]
    },

    stateContainer: {
        width: 108,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24,
        backgroundColor: Colors.backgroundColor1,
    },

    state: {
        color: 'white'
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
        height: '60%',
    },

    switch: {
        transform: [{ scaleX: 2 }, { scaleY: 2 }]
    },

    button: {
        borderRadius: 12,
        width: 108,
        height: 37,
        marginTop: 10,
        backgroundColor: Colors.buttonColor3
    },

    buttonText: {
        color: Colors.fontColor4
    },
})

export default DeviceCardWithSetTimer