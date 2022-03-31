import React from "react";
import { View, FlatList, StyleSheet } from 'react-native'

import AvailableDeviceItem from "./AvailableDeviceItem";

const AvailableDevicesList = props => {
    const renderListItem = itemData => {
        return (
            <AvailableDeviceItem
                roomId={props.roomId}
                deviceId={itemData.item.id}
                deviceName={itemData.item.name}
            />
        )
    }

    return (
        <View style={styles.listContainer}>
            <FlatList
                contentContainerStyle={styles.list}
                data={props.listData}
                renderItem={itemData => renderListItem(itemData)}
                keyExtractor={itemData => itemData.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        width: '60%'
    },

    list: {
        flexGrow: 1,
        justifyContent: "flex-start",
    },
})

export default AvailableDevicesList