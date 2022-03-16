import React from "react";
import {
    View,
    StyleSheet,
    ImageBackground
} from 'react-native';

import DeviceButton from '../components/DeviceButton'

const RoomScreen = props => {
    return (
        <ImageBackground
            source={require('../assets/images/Background3.png')}
            resizeMode="cover"
            style={styles.backgroundImage}
        >
            <View style={styles.screen}>
                <View style={styles.content}>
                    <View style={styles.buttonContainer}>
                        <DeviceButton
                            source={require('../assets/images/Light.png')}
                            onPress={() => {
                                props.navigation.navigate({
                                    routeName: 'Light'
                                })
                            }}
                        />
                        <DeviceButton
                            source={require('../assets/images/Fan.png')}
                            onPress={() => {
                                props.navigation.navigate({
                                    routeName: 'Fan'
                                })
                            }}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <DeviceButton
                            source={require('../assets/images/Door.png')}
                            buttonStyle={styles.doorButton}
                            onPress={() => {
                                props.navigation.navigate({
                                    routeName: 'Door'
                                })
                            }}
                        />
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

RoomScreen.navigationOptions = navigationData => {
    const roomName = navigationData.navigation.getParam('roomName')

    return {
        headerTitle: roomName
    }
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
        height: '48%',
        marginHorizontal: 10,
        justifyContent: "space-between",
    },

    doorButton: {
        width: 164,
        height: 314,
    }
})

export default RoomScreen