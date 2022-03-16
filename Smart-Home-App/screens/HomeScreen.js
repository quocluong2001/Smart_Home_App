import React from "react";
import { View, StyleSheet, ImageBackground } from 'react-native';

import RoomButton from "../components/RoomButton";
import { ROOMS } from "../data/testData";

//!TODO: create flatlist to render room buttons
const HomeScreen = props => {
    return (
        <ImageBackground
            source={require('../assets/images/Background4.png')}
            resizeMode="cover"
            style={styles.backgroundImage}
        >
            <View style={styles.screen}>
                <View style={{...styles.buttonContainer, marginTop: 40}}>
                    <RoomButton
                        source={require('../assets/images/Bedroom.png')}
                        roomName='Bedroom'
                        onPress={() => {
                            props.navigation.navigate({
                                routeName: 'Room',
                                params: {
                                    roomName: 'Bedroom'
                                }
                            })
                        }}
                    />
                    <RoomButton
                        source={require('../assets/images/Livingroom.png')}
                        roomName='Livingroom'
                        onPress={() => { }}
                    />
                </View>
                <View style={{...styles.buttonContainer, marginVertical: 40}}>
                    <RoomButton
                        source={require('../assets/images/Kitchen.png')}
                        roomName='Kitchen'
                        onPress={() => { }}
                    />
                    <RoomButton
                        source={require('../assets/images/Bathroom.png')}
                        roomName='Bathroom'
                        onPress={() => { }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <RoomButton
                        source={require('../assets/images/Garden.png')}
                        roomName='Garden'
                        onPress={() => { }}
                    />
                    <RoomButton
                        source={require('../assets/images/Balcony.png')}
                        roomName='Balcony'
                        onPress={() => { }}
                    />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
    },

    screen: {
        flex: 1,
        alignItems: "center",
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: '85%'
    },
})

export default HomeScreen