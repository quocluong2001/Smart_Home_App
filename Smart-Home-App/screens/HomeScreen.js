import React from "react";
import { View, StyleSheet, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux'

import RoomList from "../components/RoomList";

const HomeScreen = props => {
    const roomsInfo = useSelector(state => state.rooms.rooms)
    
    return (
        <ImageBackground
            source={require('../assets/images/Background4.png')}
            resizeMode="cover"
            style={styles.backgroundImage}
            blurRadius={1}
        >
            <View style={styles.screen}>
                <RoomList
                    listData={roomsInfo}
                    navigation={props.navigation}
                />
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
})

export default HomeScreen