import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    Switch
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import BodyText from './BodyText';
import NormalButton from './NormalButton';
import Colors from '../constants/Colors';
import { selectDeviceInfoByDeviceId } from '../store/selectors/selectDevicesInfoByRoomId';
import { toggleOnOff } from '../store/actions/toggleDeviceStatus'

const DeviceCardWithSetTimer = props => {
    const roomId = props.roomId
    const deviceId = props.deviceId

    const deviceInfo = useSelector(selectDeviceInfoByDeviceId(roomId, deviceId))

    const dispatch = useDispatch()

    const switchHandler = () => {
        dispatch(toggleOnOff(roomId, deviceId))
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
                <View style={styles.textContainer}>
                    <BodyText style={styles.deviceNameText}>
                        {props.deviceName}
                    </BodyText>
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
                        <View style={styles.stateContainer}>
                            <BodyText style={styles.state}>
                                {visibleState}
                            </BodyText>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Switch
                            style={styles.switch}
                            value={deviceInfo.status}
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

    textContainer: {
        width: '100%',
        alignItems: 'center'
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