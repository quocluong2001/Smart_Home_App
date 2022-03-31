import React from "react";
import { View, StyleSheet, FlatList } from 'react-native'
import { useSelector } from "react-redux";

import RoomButton from "./RoomButton";

const RoomList = props => {
    const favRooms = useSelector(state => state.rooms.favoriteRooms)

    const renderRoomItems = itemData => {
        const isFav = favRooms.some(room => room.id === itemData.item.id)

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
                            roomId: itemData.item.id,
                            isFav: isFav,
                        }
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.listContainer}>
            <FlatList
                contentContainerStyle={styles.list}
                numColumns={2}
                data={props.listData}
                renderItem={itemData => renderRoomItems(itemData)}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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

export default RoomList