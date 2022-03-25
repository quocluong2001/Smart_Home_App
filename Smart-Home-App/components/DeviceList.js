import React from "react";
import { View, StyleSheet, FlatList } from 'react-native'

import DeviceCard from "./DeviceCard";
import DeviceCardWithSetTimer from "./DeviceCardWithSetTimer";

const DeviceList = props => {
    const renderListItem = (itemData) => {
        if (props.numOfButtons === '1') {
            return (
                <DeviceCard
                    deviceId={itemData.item.id}
                    deviceName={itemData.item.name}
                    source={props.deviceImage}
                    switchValue={itemData.item.state}
                    style={{ marginVertical: 10 }}
                    activeStateText={props.activeStateText}
                    inactiveStateText={props.inactiveStateText}
                />
            )
        }
        else if (props.numOfButtons === '2') {
            return (
                <DeviceCardWithSetTimer
                    deviceType={itemData.item.name}
                    source={props.deviceImage}
                    state={itemData.item.visibleState}
                    switchValue={itemData.item.state}
                    buttonName='Set timer'
                    buttonStyle={styles.button}
                    buttonTextStyle={styles.buttonText}
                    onPressButton={buttonHandler}
                    style={{ marginVertical: 10 }}
                    activeStateText={props.activeStateText}
                    inactiveStateText={props.inactiveStateText}
                />
            )
        }
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
    },

    list: {
        flexGrow: 1,
        justifyContent: "flex-start",
    },
})

export default DeviceList