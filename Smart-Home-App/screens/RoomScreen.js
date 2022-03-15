import React from "react";
import {
    View,
    StyleSheet,
    ImageBackground
} from 'react-native';

import Header from '../components/Header'
import DeviceButton from '../components/DeviceButton'

const RoomScreen = props => {
    return (
        <ImageBackground
            source={require('../assets/images/Background3.png')}
            resizeMode="cover"
            style={styles.backgroundImage}
        >
            <View style={styles.screen}>
                <Header>
                    ROOM
                </Header>
                <View style={styles.content}>
                    <View style={styles.buttonContainer}>
                        <DeviceButton
                            source={require('../assets/images/Light.png')}
                            onPress={() => { }}
                        />
                        <DeviceButton
                            source={require('../assets/images/Fan.png')}
                            onPress={() => { }}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <DeviceButton
                            source={require('../assets/images/Door.png')}
                            buttonStyle={styles.doorButton}
                            onPress={() => { }}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%'
    },

    screen: {
        flex: 1,
        alignItems: "center",
    },

    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
    },

    buttonContainer: {
        height: '45%',
        marginHorizontal: 10,
        justifyContent: "space-between",
    },

    doorButton: {
        width: 164,
        height: 314,
    }
})

export default RoomScreen