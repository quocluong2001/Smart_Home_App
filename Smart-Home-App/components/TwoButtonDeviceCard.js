import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import BodyText from './BodyText';
import NormalButton from './NormalButton';

const TwoButtonDeviceCard = props => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <BodyText style={styles.deviceTypeText}>
                    {props.deviceType}
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
                            State
                        </BodyText>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <NormalButton
                        buttonStyle={{...styles.button1, ...props.button1Style}}
                        buttonTextStyle={{...styles.button1Text, ...props.button1TextStyle}}
                        buttonName={props.button1Name}
                    />
                    <NormalButton
                        buttonStyle={{...styles.button2, ...props.button2Style}}
                        buttonTextStyle={{...styles.button2Text, ...props.button2TextStyle}}
                        buttonName={props.button2Name}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 190,
        backgroundColor: 'rgba(62, 64, 91, 0.8)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 24,
    },

    textContainer: {
        width: '100%',
        alignItems: 'center'
    },

    deviceTypeText: {
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
        width: 90,
        height: 90,
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
        backgroundColor: 'rgba(62, 64, 91, 0.8)',
    },

    state: {
        color: 'white'
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '50%',
        height: '62%',
    },

    button1: {
        borderRadius: 12,
        width: 108,
        height: 37
    },

    button1Text: {
        color: 'black'
    },

    button2: {
        borderRadius: 12,
        width: 108,
        height: 37
    },

    button2Text: {
        color: 'black'
    },
})

export default TwoButtonDeviceCard