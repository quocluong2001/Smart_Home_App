import React from 'react';
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

import BodyText from './BodyText';
import Colors from '../constants/Colors';
import RemoveButton from './RemoveButton';
import { selectDeviceInfoByDeviceId } from '../store/selectors/selectDevicesInfoByRoomId';
import { toggleOnOff } from '../store/actions/toggleDeviceStatus';
import { removeDevice } from '../store/actions/removeDevice';

const DeviceCard = props => {
    const roomId = props.roomId
    const deviceId = props.deviceId
    const deviceInfo = useSelector(selectDeviceInfoByDeviceId(roomId, deviceId))

    const dispatch = useDispatch()

    const switchHandler = () => {
        dispatch(toggleOnOff(roomId, deviceId))
    }

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

    let visibleState
    if (deviceInfo.status === true) {
        visibleState = props.activeStateText
    }
    else {
        visibleState = props.inactiveStateText
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ ...styles.container, ...props.style }}>
                <View style={styles.header}>
                    <View style={styles.textContainer}>
                        <BodyText style={styles.deviceNameText}>
                            {props.deviceName}
                        </BodyText>
                    </View>
                    <RemoveButton
                        style={styles.removeButton}
                        buttonColor='red'
                        onRemove={removeDeviceHandler}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.imageStateContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={props.source}
                                resizeMode='contain'
                                style={styles.image}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Switch
                            style={styles.switch}
                            value={deviceInfo.status}
                            onValueChange={switchHandler}
                        />
                        <View style={styles.stateContainer}>
                            <BodyText style={styles.state}>
                                {visibleState}
                            </BodyText>
                        </View>
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
        width: 260,
        height: 150,
        backgroundColor: Colors.backgroundColor1,
        borderRadius: 24,
    },

    header: {
        flexDirection: 'row',
        width: '100%',

    },

    removeButton: {
        width: '37%',
        alignItems: 'flex-end',
        paddingRight: 10,
    },

    textContainer: {
        width: '63%',
        alignItems: 'flex-end',
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
        marginTop: 5,
    },

    state: {
        color: 'white'
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '62%',
    },

    switch: {
        transform: [{ scaleX: 2 }, { scaleY: 2 }]
    }
})

export default DeviceCard