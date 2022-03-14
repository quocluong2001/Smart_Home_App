import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const DeviceButton = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onPress}
        >
            <View style={{ ...styles.imageContainer, ...props.buttonStyle }}>
                <Image
                    source={props.source}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 150,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(62, 64, 91, 0.8)',
        padding: 10,
        borderRadius: 24
    },

    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    }
})

export default DeviceButton