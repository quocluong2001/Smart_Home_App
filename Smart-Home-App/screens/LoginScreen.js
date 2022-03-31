import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

import TitleText from '../components/TitleText';
import LoginCard from '../components/LoginCard';
import Colors from '../constants/Colors';
import Loading from '../components/Loading';

const LoginScreen = props => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <ScrollView style={styles.screen}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView style={styles.content}>
                    <View style={styles.imageContainer}>
                        <Loading
                            visible={isLoading}
                        />
                        <Image
                            source={{ uri: 'https://i.ibb.co/L5s6q7m/Background0.png' }}
                            resizeMode='cover'
                            style={styles.image}
                            onLoadStart={() => setIsLoading(true)}
                            onLoadEnd={() => setIsLoading(false)}
                        />
                    </View>
                    <View style={styles.titleContainer}>
                        <TitleText style={styles.title}>
                            Smart
                        </TitleText>
                        <TitleText style={styles.title}>
                            Home App
                        </TitleText>
                    </View>
                    <LoginCard onLogin={() => {
                        props.navigation.replace('Home')
                    }} />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.backgroundColor3,
    },

    content: {
        alignItems: 'center',
        borderBottomEndRadius: 20,
        marginBottom: 40,
    },

    imageContainer: {
        width: 345,
        height: 337,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
    },

    image: {
        width: '100%',
        height: '100%',
    },

    titleContainer: {
        width: 217,
        height: 104,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    title: {
        color: Colors.fontColor4,
    },


})

export default LoginScreen