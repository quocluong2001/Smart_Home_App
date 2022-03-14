import { React, useState } from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    Modal,
} from 'react-native';

import InputField from "./InputField";
import Colors from "../constants/Colors";
import NormalButton from "./NormalButton";

const AddNewDeviceModal = props => {
    const [deviceInform, setDeviceInform] = useState('')

    const deviceInformInputHandler = inputDeviceType => {
        setDeviceInform(inputDeviceType)
    }

    const confirmDeviceInputHandler = () => {
        props.onConfirm(deviceInform)
        setDeviceInform('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <InputField
                        placeholder='Device name'
                        autoCapitalize='none'
                        autoCorrect={false}
                        textAlign='left'
                        containerStyle={styles.usernameInputContainer}
                        keyboardType='email-address'
                        onChangeText={deviceInformInputHandler}
                        value={deviceInform.deviceType}
                    />
                    <NormalButton
                        buttonName='Confirm'
                        buttonStyle={styles.confirmButton}
                        buttonTextStyle={styles.buttonText}
                        onPress={confirmDeviceInputHandler}
                    />
                    <NormalButton
                        buttonName='Cancel'
                        buttonStyle={styles.cancelButton}
                        buttonTextStyle={styles.buttonText}
                        onPress={props.onCancel}
                    />
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 30,
        backgroundColor: Colors.backgroundColor0,
        borderRadius: 20,
        elevation: 10,
    },

    usernameInputContainer: {
        width: 272,
        height: 45,
    },

    passwordInputContainer: {
        width: 272,
        height: 45,
        marginTop: 20,
    },

    confirmButton: {
        backgroundColor: Colors.buttonColor1,
        width: 180,
        height: 32,
        marginTop: 20,
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

export default AddNewDeviceModal