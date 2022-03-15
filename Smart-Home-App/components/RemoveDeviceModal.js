import { React, useState } from "react";
import {
    View,
    StyleSheet,
    Modal,
    FlatList,
    TouchableOpacity
} from 'react-native'

import NormalButton from "./NormalButton";
import Colors from "../constants/Colors";
import BodyText from "./BodyText";

const RemoveDeviceModal = props => {
    const deviceList = props.deviceList

    const removeDeviceHandler = deviceName => {
        props.onRemove(deviceName)
    }

    const renderListItem = (
        deviceType,
        removeItemHandler
    ) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={removeItemHandler}>
                <View style={styles.listItem}>
                    <BodyText style={{fontFamily: 'roboto-bold'}}>
                        Device name:
                    </BodyText>
                    <BodyText>
                        {deviceType}
                    </BodyText>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.container}>
                <BodyText style={{fontFamily: 'roboto-bold'}}>
                    Press on device you want to be deleted
                </BodyText>
                <View style={styles.listContainer}>
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={deviceList}
                        renderItem={itemData => renderListItem(
                            itemData.item.deviceType,
                            () => removeDeviceHandler(itemData.item.deviceType))}
                        keyExtractor={itemData => itemData.deviceType}
                    />
                </View>
                <NormalButton
                    buttonName='Remove all'
                    buttonStyle={styles.removeAllButton}
                    buttonTextStyle={styles.buttonText}
                    onPress={props.onRemoveAll}
                />
                <NormalButton
                    buttonName='Cancel'
                    buttonStyle={styles.cancelButton}
                    buttonTextStyle={styles.buttonText}
                    onPress={props.onCancel}
                />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 5,
    },

    deviceNameInputContainer: {
        width: 272,
        height: 45,
    },

    listContainer: {
        flex: 1,
        width: '60%'
    },

    list: {
        flexGrow: 1,
        justifyContent: "flex-start",
    },

    listItem: {
        flexDirection: "row",
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: '100%',
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },

    removeAllButton: {
        backgroundColor: Colors.buttonColor1,
        width: 180,
        height: 32,
        marginTop: 20,
    },

    cancelButton: {
        backgroundColor: Colors.buttonColor0,
        width: 180,
        height: 32,
        marginTop: 20,
    },

    buttonText: {
        color: Colors.fontColor1
    },
})

export default RemoveDeviceModal