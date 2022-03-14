import { React, useState } from "react";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import InputField from "./InputField";
import Colors from "../constants/Colors";
import NormalButton from "./NormalButton";
import BodyText from "./BodyText";

const LoginCard = props => {
    const [username, setUsername] = useState('')

    const usernameInputHandler = inputUsername => {
        setUsername(inputUsername)
    }

    const [password, setPassword] = useState('')

    const passwordInputHandler = inputPassword => {
        setPassword(inputPassword)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <InputField
                    placeholder='Username'
                    autoCapitalize='none'
                    autoCorrect={false}
                    textAlign='left'
                    containerStyle={styles.usernameInputContainer}
                    keyboardType='email-address'
                    onChangeText={usernameInputHandler}
                    value={username}
                />
                <InputField
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    textAlign='left'
                    containerStyle={styles.passwordInputContainer}
                    keyboardType='default'
                    secureTextEntry={true}
                    onChangeText={passwordInputHandler}
                    value={password}
                />
                <NormalButton
                    buttonName='Login'
                    buttonStyle={styles.loginButton}
                    buttonTextStyle={styles.loginButtonText}
                    onPress={props.onLogin}
                />
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={props.onForgotPassword}
                >
                    <View style={styles.forgotPasswordContainer}>
                        <BodyText style={{ color: Colors.fontColor3 }}>
                            Forgot password
                        </BodyText>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
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

    loginButton: {
        backgroundColor: Colors.buttonColor0,
        width: 180,
        height: 32,
        marginTop: 20,
    },

    loginButtonText: {
        color: Colors.fontColor1
    },

    forgotPasswordContainer: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.fontColor3,
        marginTop: 20,
    }
})

export default LoginCard