import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import RoomList from "../components/RoomList";
import Loading from "../components/Loading";
import getAllDevices from "../store/thunk-functions/getAllDevices";

const HomeScreen = props => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllDevices())
    }, [])

    const roomsInfo = useSelector(state => state.rooms.rooms)
    const [isLoading, setIsLoading] = useState(true)

    return (
        <View style={styles.screenContainer}>
            <Loading
                visible={isLoading}
            />
            <ImageBackground
                source={{ uri: 'https://i.ibb.co/58LJzhP/Background4.jpg' }}
                resizeMode="cover"
                style={styles.backgroundImage}
                // blurRadius={1}
                onLoadStart={() => setIsLoading(true)}
                onLoadEnd={() => setIsLoading(false)}
            >
                <View style={styles.screen}>
                    <RoomList
                        listData={roomsInfo}
                        navigation={props.navigation}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
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