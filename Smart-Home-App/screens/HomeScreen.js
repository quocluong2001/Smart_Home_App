import React from "react";
import { View, StyleSheet, ImageBackground, FlatList } from 'react-native';

import RoomButton from "../components/RoomButton";
import { ROOMS } from "../data/testData";

const HomeScreen = props => {
    const roomsInfo = ROOMS

    const renderRoomItems = itemData => {
        return (
            <RoomButton
                buttonStyle={styles.roomItem}
                source={itemData.item.imageSource}
                roomName={itemData.item.name}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Room',
                        params: {
                            roomName: itemData.item.name,
                            roomId: itemData.item.id
                        }
                    })
                }}
            />
        )
    }

    return (
        <ImageBackground
            source={require('../assets/images/Background4.png')}
            resizeMode="cover"
            style={styles.backgroundImage}
        >
            <View style={styles.screen}>
                <View style={styles.listContainer}>
                    <FlatList
                        contentContainerStyle={styles.list}
                        numColumns={2}
                        data={roomsInfo}
                        renderItem={itemData => renderRoomItems(itemData)}
                        keyExtractor={item => item.id}
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

    listContainer: {
        flex: 1,
        marginTop: 50
    },

    list: {
        flexGrow: 1,
    },

    roomItem: {
        marginHorizontal: 10,
        marginBottom: 10,
    }
})

export default HomeScreen